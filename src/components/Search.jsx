export default function Search() {
  return (
    <div className="w-full py-4 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md p-4 sticky top-40 z-5">
      <input
        className="w-full bg-gray-200 dark:bg-gray-800  text-gray-500 rounded-lg shadow-md p-4"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}
