import "./countres.css";
import React, { use, useState } from "react";
import Country from "./country/country";
const Counters = ({ countriesPromise }) => {
  const counters = use(countriesPromise);
  // console.log(counters);
  const [travelCountry, setTravelCountry] = useState([]);

  const handelTravelCountry = (country) => {
    console.log(country);
    const newTravelCountry = [...travelCountry, country];
    setTravelCountry(newTravelCountry);
  };
  return (
    <div>
      <h3>All counters is here: {counters.length} ta </h3>
      <h3>traveling country: {travelCountry.length}</h3>
      <ol>
        {travelCountry.map((country) => (
          <li>{country.name.common}</li>
        ))}
      </ol>
      <div className="counters">
        {counters.map((country) => (
          <Country
            handelTravelCountry={handelTravelCountry}
            key={country.cca3}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Counters;
