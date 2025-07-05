import { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherOfCity, setWeatherOfCity] = useState(null);
  const [history, setHistory] = useState([]);

  const updateWeather = (data, cityName) => {
    setWeatherOfCity(data);
    setHistory(prev => {
      const updated = [cityName, ...prev.filter(c => c !== cityName)];
      return updated.slice(0, 5);
    });
  };

  return (
    <WeatherContext.Provider value={{ weatherOfCity, history, updateWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWeather = () => useContext(WeatherContext);
