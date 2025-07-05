import "./App.css";

import SearchBar from "./components/SearchBar";

function App() {
  const handleSearch = async city => {
    try {
      console.log("city", city);
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="min-h-[500px] bg-blue-100/40 border-blue-300 rounded-2xl text-gray-800 p-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          🌤️ Outfit Recommender
        </h1>
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  );
}

export default App;
