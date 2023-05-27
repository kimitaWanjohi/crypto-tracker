import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCryptos } from "../redux/cryptos/slice";
import CryptoList from "./CryptoList";

export default function Cryptos() {
  const dispatch = useDispatch();
  const cryptos = useSelector((state) => state.cryptos.cryptos);
  const loading = useSelector((state) => state.cryptos.status === "loading");

  useEffect(() => {
    dispatch(fetchCryptos());
  }, [dispatch]);

  return (
    <div className="w-full mx-auto dark:bg-gray-800 bg-white">
      <h1 className="text-4xl dark:text-gray-900  my-2 font-bold text-center">
        Cryptos
      </h1>
      {loading ? <h1>loading...</h1> : <CryptoList cryptos={cryptos} />}
    </div>
  );
}
