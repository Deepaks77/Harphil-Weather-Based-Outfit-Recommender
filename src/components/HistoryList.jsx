export default function HistoryList({ history, onClick }) {
  if (!history.length) return null;
  return (
    <div className="my-4">
      <h3 className="font-semibold text-left">Recent Searches:</h3>
      <ul className="flex gap-2 flex-wrap mt-2">
        {history.map((city, idx) => (
          <li
            key={idx}
            onClick={() => onClick(city)}
            className="bg-white px-3 py-1 rounded-md shadow-sm cursor-pointer hover:bg-gray-100"
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}
