const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API;
export const getWeatherApiEndPoint = city =>
  `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&limit=5`;
