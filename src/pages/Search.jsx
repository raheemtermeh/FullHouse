import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // عملکرد جستجو
    console.log("در حال جستجو برای:", query);
  };

  return (
    <div className="bg-primary text-white min-h-screen p-6 text-right">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">جستجو</h1>
        <form onSubmit={handleSearch} className="mb-6">
          <input
            type="text"
            className="w-full p-2 rounded-lg bg-secondary text-white"
            placeholder="عبارت مورد نظر را وارد کنید..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="mt-4 px-6 py-2 bg-accent text-white rounded-lg">
            جستجو
          </button>
        </form>
        <div>
          {/* نمایش نتایج جستجو */}
          <p>نتایج جستجو در اینجا نمایش داده می‌شود.</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
