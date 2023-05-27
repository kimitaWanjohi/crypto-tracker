import CryptoCard from "./CryptoCard";
import Search from "./Search";

export default function CryptoList({ cryptos }) {
  return (
    <>
      <div className="container mx-auto px-4 mb-4">
        <div className="w-full my-2 py-2">
          <Search />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cryptos.map((crypto) => (
            <CryptoCard key={crypto.name} crypto={crypto} />
          ))}
        </div>
      </div>
    </>
  );
}
