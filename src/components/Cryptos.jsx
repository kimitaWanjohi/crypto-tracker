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

  if (error) return <h1 className="text-4xl container">{error}</h1>;
  return (
    <div className="w-full mx-auto dark:bg-gray-800 bg-white">
      <Search />
      <h1 className="text-4xl dark:text-white text-gray-800 font-bold text-center">
        Cryptos
      </h1>
      {loading ? <h1>loading...</h1> : <CryptoList cryptos={cryptos} />}
    </div>
  );
}
