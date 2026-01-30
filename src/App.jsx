import { Suspense } from "react";
import "./App.css";

import Counters from "./components/Countres/Countres";

const countries = fetch(
  "https://studies.cs.helsinki.fi/restcountries/api/all",
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<h3>loading country data...</h3>}>
        <Counters countriesPromise={countries}></Counters>
      </Suspense>
    </>
  );
}

export default App;
