import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCryptos } from "../redux/cryptos/slice";
import Search from "./Search";
import CryptoList from "./CryptoList";

export default function Cryptos() {
  const dispatch = useDispatch();
  const cryptos = useSelector((state) => state.cryptos.cryptos);
  const loading = useSelector((state) => state.cryptos.status === "loading");
  const error = useSelector((state) => state.cryptos.status === "failed");
  useEffect(() => {
    dispatch(fetchCryptos());
  }, [dispatch]);
  if (loading) return <h1 className="text-4xl">Loading...</h1>;
  if (error) return <h1 className="text-4xl container">{error}</h1>;
  return (
    <div className="container mx-auto dark:bg-indigo-900 bg-white">
      <Search />
      <h1 className="text-4xl dark:text-white text-gray-800 font-bold text-center">
        Cryptos
      </h1>
      <CryptoList cryptos={cryptos} />
    </div>
  );
}
