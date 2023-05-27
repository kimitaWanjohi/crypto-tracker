import { useSelector } from "react-redux";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useParams, useNavigate } from "react-router-dom";

export default function Crypto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const crypto = useSelector((state) =>
    state.cryptos.cryptos.find((crypto) => crypto.name === id)
  );

  return (
    <div className="min-h-screen relative">
      <div
        onClick={() => navigate("/")}
        className="absolute left-4 top-2 flex text-gray-900 dark:text-gray-400 cursor-pointer"
      >
        <AiOutlineArrowLeft className="text-2xl" />
        back
      </div>
      <div className="max-w-2xl mx-auto my-6 relative bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md p-4 hover:dark:bg-gray-600 ">
        <div className="flex flex-col justify-between items-center w-full">
          <div className="flex flex-col justify-between items-center w-full">
            <img
              src={crypto.icon_url}
              alt={crypto.name}
              className="w-full h-80 object-cover rounded-xl"
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
    </div>
  );
}
