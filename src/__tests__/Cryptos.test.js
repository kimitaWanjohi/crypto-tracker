import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from '../redux/store';
import Cryptos from "../components/Cryptos";

describe("Cryptos", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Cryptos />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders cryptos page", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Cryptos />
        </Provider>
      )
      .toJSON();
    expect(tree.children.length).toBe(2);
  });
});
