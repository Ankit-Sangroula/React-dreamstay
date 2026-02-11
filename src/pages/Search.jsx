import { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold mb-6">Search Hotels</h2>

      <input
        type="text"
        placeholder="Search destination..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-3 rounded-lg w-full max-w-md"
      />

      {query && (
        <p className="mt-4 text-gray-600">
          Showing results for: <span className="font-semibold">{query}</span>
        </p>
      )}
    </div>
  );
}

export default Search;
