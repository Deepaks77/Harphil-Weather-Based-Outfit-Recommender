export default function WeatherCard({ name, temp, condition, humidity, wind }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 text-center">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-lg">
        🌡️ {temp}°C - {condition}
      </p>
      <p>💨 Wind: {wind} m/s</p>
      <p>💧 Humidity: {humidity}%</p>
    </div>
  );
}
