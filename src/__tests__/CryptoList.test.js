import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import CryptoList from "../components/CryptoList";

const mockCrypto = [
  {
    symbol: "611",
    name: "SixEleven",
    name_full: "SixEleven (611)",
    max_supply: 611000,
    icon_url: "https://assets.coinlayer.com/icons/611.png",
  },
  {
    symbol: "ABC",
    name: "AB-Chain",
    name_full: "AB-Chain (ABC)",
    max_supply: 210000000,
    icon_url: "https://assets.coinlayer.com/icons/ABC.png",
  },
  {
    symbol: "ACP",
    name: "Anarchists Prime",
    name_full: "Anarchists Prime (ACP)",
    max_supply: 53760000,
    icon_url: "https://assets.coinlayer.com/icons/ACP.png",
  },
  {
    symbol: "ACT",
    name: "ACT",
    name_full: "ACT (ACT)",
    max_supply: 10000000000,
    icon_url: "https://assets.coinlayer.com/icons/ACT.png",
  },
  {
    symbol: "ACT*",
    name: "Achain",
    name_full: "Achain (ACT*)",
    max_supply: 1000000000,
    icon_url: "https://assets.coinlayer.com/icons/ACT*.png",
  },
];

describe("CryptoList cryptos={mockCrypto}", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <CryptoList cryptos={mockCrypto} />
          </BrowserRouter>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders a list of missions", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <CryptoList cryptos={mockCrypto} />
          </BrowserRouter>
        </Provider>
      )
      .toJSON();
    expect(tree.children.length).toBe(2);
  });
});
