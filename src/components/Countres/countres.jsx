import React, { use } from "react";
import Country from "./country";
const Counters = ({ countriesPromise }) => {
  const countries = use(countriesPromise);
  // console.log(countries);
  return (
    <div>
      <h2>traveling countries : {countries.length} </h2>
      {countries.map((country) => (
        <Country key={country.cca3} country={country}></Country>
      ))}
    </div>
  );
};

export default Counters;
