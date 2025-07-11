export default function ErrorCard({ message }) {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4 text-center"
      role="alert"
    >
      <strong className="font-bold">Error: </strong>
      <span className="block">{message}</span>
    </div>
  );
}
