import CryptoCard from "./CryptoCard";

export default function CryptoList({ cryptos }) {
  return (
    <div className="container mx-auto dark:bg-indigo-950 bg-white">
      {cryptos.map((crypto) => (
        <CryptoCard key={crypto.name} crypto={crypto} />
      ))}
    </div>
  );
}
