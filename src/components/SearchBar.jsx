// components/SearchBar.jsx
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input, 400);

  useEffect(() => {
    if (debouncedInput.trim()) {
      onSearch(debouncedInput.trim());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedInput]);

  return (
    <div className="flex justify-center gap-2 my-4">
      <input
        className="border px-4 py-2 rounded-md w-full max-w-full text-black"
        type="text"
        placeholder="Enter city name..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
    </div>
  );
}
