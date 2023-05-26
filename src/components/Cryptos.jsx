import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCryptos } from "../redux/cryptos/slice";

export default function Cryptos() {
  const dispatch = useDispatch();
  const cryptos = useSelector((state) => state.cryptos.cryptos);
  const loading = useSelector((state) => state.cryptos.loading);
  const error = useSelector((state) => state.cryptos.error);
  useEffect(() => {
    dispatch(fetchCryptos());
  }, [dispatch]);
  if (loading) return <h1 className="text-4xl">Loading...</h1>;
  if (error) return <h1 className="text-4xl container">{error}</h1>;
  return <h1 className="text-xl truncate">{JSON.stringify(cryptos)}</h1>;
}
