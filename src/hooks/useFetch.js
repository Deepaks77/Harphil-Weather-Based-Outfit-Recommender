import { useState, useCallback } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(
    async ({ url, method = "GET", body = null, headers = {} }) => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
          body: body ? JSON.stringify(body) : null,
        });

        const contentType = response.headers.get("content-type");
        const isJSON = contentType && contentType.includes("application/json");
        const result = isJSON ? await response.json() : await response.text();

        if (!response.ok) {
          throw new Error(result?.message || "Something went wrong");
        }

        setData(result);
        return result;
      } catch (err) {
        setError(err.message || "Unknown error");
        setData(null);
        return null;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { data, error, loading, fetchData };
};

export default useFetch;
