import "./App.css";
import CoinInfo from "./components/CoinInfo";
import MyAppBar from "./components/MyAppBar";
import CoinState from "./context/coininfo/CoinState";
function App() {
  return (
    <CoinState>
      <MyAppBar />
        <br/>
      <CoinInfo/>
    </CoinState>
  );
}

export default App;
