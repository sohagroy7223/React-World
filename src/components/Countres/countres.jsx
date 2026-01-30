import React, { use } from "react";
import Country from "./country/country";
const Counters = ({ countriesPromise }) => {
  const counters = use(countriesPromise);
  // console.log(counters);
  return (
    <div>
      <h3>All counters is here: {counters.length} ta </h3>
      {counters.map((country) => (
        <Country key={country.cca3} country={country}></Country>
      ))}
    </div>
  );
};

export default Counters;
