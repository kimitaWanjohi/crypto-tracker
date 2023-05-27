export default function CryptoList({ crypto }) {
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md p-4">
      <div className="flex flex-col justify-between items-start">
        <div className="flex flex-col justify-between">
          <img
            src={crypto.icon_url}
            alt={crypto.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold">{crypto.name_full}</span>
            <span className="text-sm text-gray-400">{crypto.symbol}</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <span className="text-lg font-bold mr-2">
            max supply
            <br />
            {crypto.max_supply.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
