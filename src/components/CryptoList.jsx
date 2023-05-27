import CryptoCard from "./CryptoCard";

export default function CryptoList({ cryptos }) {
  return (
    <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {cryptos.map((crypto) => (
        <CryptoCard key={crypto.name} crypto={crypto} />
      ))}
    </div>
  );
}
