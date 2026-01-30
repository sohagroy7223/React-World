import React from "react";
import "./country.css";
const Country = ({ country }) => {
  //   console.log(country);
  const { name, flags, capital, independent } = country;
  return (
    <div className="country">
      <img src={flags.png} alt="" />
      <h3>name: {name.common} </h3>
      <h4>official name: {name.official}</h4>
      <p>capital : {capital}</p>
      <p>independent : {independent ? "free" : "not free"}</p>
    </div>
  );
};

export default Country;
