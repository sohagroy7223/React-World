import React from "react";

const Country = ({ country }) => {
  console.log(country);
  const { flags, name, capital } = country;
  const divStyle = {
    border: "2px solid gold",
    margin: " 10px",
    padding: " 20px",
    borderRadius: "20px",
  };
  return (
    <div style={divStyle}>
      <img src={flags.png} alt="" />
      <h2>name: {name.common}</h2>
      <p>official name : {name.official}</p>
      <h4>capital : {capital} </h4>
    </div>
  );
};

export default Country;
