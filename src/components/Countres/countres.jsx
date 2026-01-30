import "./countres.css";
import React, { use, useState } from "react";
import Country from "./country/country";

const Counters = ({ countriesPromise }) => {
  const counters = use(countriesPromise);

  const [travelCountry, setTravelCountry] = useState([]);

  const [visitFlags, setVisitFlags] = useState([]);

  const handleCountryFlags = (country) => {
    console.log("hello flags uel", country);
    const flagsUrl = [...visitFlags, country];
    setVisitFlags(flagsUrl);
  };

  const handelTravelCountry = (country) => {
    console.log(country);
    const newTravelCountry = [...travelCountry, country];
    setTravelCountry(newTravelCountry);
  };
  return (
    <div>
      <h3>All counters is here: {counters.length} ta </h3>
      <h3>traveling country: {travelCountry.length}</h3>
      <h3>
        flags url:
        <ol>
          {visitFlags.map((country) => (
            <li key={country.cca3}>{country.flags.png}</li>
          ))}
        </ol>
      </h3>
      <ol>
        {travelCountry.map((country) => (
          <li key={country.cca3}> {country.name.common}</li>
        ))}
      </ol>
      <div className="counters">
        {counters.map((country) => (
          <Country
            handelTravelCountry={handelTravelCountry}
            handleCountryFlags={handleCountryFlags}
            key={country.cca3}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Counters;
