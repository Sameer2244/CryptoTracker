import "./App.css";
import CoinInfo from "./components/CoinInfo";
import MyAppBar from "./components/MyAppBar";
import Toptencoins from "./components/Toptencoins";
import CoinState from "./context/coininfo/CoinState";
function App() {
  return (
    <CoinState>
      <MyAppBar />
      <Toptencoins/>
        <br/>
      <CoinInfo/>
    </CoinState>
  );
}

export default App;
