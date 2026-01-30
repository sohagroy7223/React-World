import React, { useState } from "react";
import "./country.css";
const Country = ({ country }) => {
  //   console.log(country);

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
  };

  const { name, flags, capital, independent } = country;
  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={flags.png} alt="" />
      <h3>name: {name.common} </h3>
      <h4>official name: {name.official}</h4>
      <p>capital : {capital}</p>
      <p>independent : {independent ? "free" : "not free"}</p>
      <button onClick={handleVisited}>
        {visited ? "visited" : "not visited"}
      </button>
    </div>
  );
};

export default Country;
