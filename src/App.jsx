import { Suspense } from "react";
import "./App.css";
import Counters from "./components/Countres/Countres";

const countriesPromise = fetch(
  "https://studies.cs.helsinki.fi/restcountries/api/all",
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<h3>loading data ...</h3>}>
        <Counters countriesPromise={countriesPromise}></Counters>
      </Suspense>
    </>
  );
}

export default App;
