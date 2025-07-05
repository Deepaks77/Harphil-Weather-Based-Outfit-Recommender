import "./App.css";
import ErrorCard from "./components/ErrorCard";
import HistoryList from "./components/HistoryList";
import OutfitSuggestion from "./components/OutfitSuggestion";
import SearchBar from "./components/SearchBar";
import ShimmerCard from "./components/ShimmerCard";
import WeatherCard from "./components/WeatherCard";
import { useWeather } from "./context/WeatherContext";
import useFetch from "./hooks/useFetch";
import { getWeatherApiEndPoint } from "./utils.js/endpoint";

function App() {
  const { updateWeather, history, weatherOfCity } = useWeather();
  const { fetchData, error, loading, data } = useFetch();
  const handleSearch = async city => {
    try {
      const data = await fetchData({ url: getWeatherApiEndPoint(city) });
      if (data) {
        updateWeather(data, city);
      }
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="min-h-[500px] bg-blue-100/40 border-blue-300 rounded-2xl text-gray-800 p-4">
      <div className="lg:w-xl max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          🌤️ Outfit Recommender
        </h1>
        <SearchBar onSearch={handleSearch} />
        <HistoryList history={history} onClick={handleSearch} />
        {loading ? (
          <ShimmerCard />
        ) : (
          weatherOfCity &&
          data && (
            <div>
              <WeatherCard
                name={weatherOfCity.name}
                temp={weatherOfCity?.main?.temp}
                condition={weatherOfCity?.weather?.[0]?.main}
                wind={weatherOfCity?.wind.speed}
                humidity={weatherOfCity?.main.humidity}
              />
              <OutfitSuggestion
                condition={weatherOfCity?.weather?.[0]?.main}
                temp={weatherOfCity?.main?.temp}
              />
            </div>
          )
        )}
        {error && <ErrorCard message={error} />}
      </div>
    </div>
  );
}

export default App;
