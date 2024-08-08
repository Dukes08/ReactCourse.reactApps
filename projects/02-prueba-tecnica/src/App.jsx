import "./App.css";
import { useFetch } from "./customHooks/fetch";

function App() {
  const  info  = useFetch({url: "https://real-time-finance-data.p.rapidapi.com/stock-time-series-source-2?symbol=AAPL&period=1D"});
  console.log(info);
  return <>{info && <main>{info['data']["status"]}</main>}</>;
}

export default App;
