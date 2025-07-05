// components/SearchBar.jsx
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
      setInput(""); // clear input
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center gap-2 my-4 max-w-md mx-auto"
    >
      <input
        className="border px-4 py-2 rounded-md w-full text-black"
        type="text"
        placeholder="Enter city name..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white cursor-pointer px-4 py-2 rounded-md hover:bg-blue-600 "
      >
        Search
      </button>
    </form>
  );
}
