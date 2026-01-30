import React from "react";

const Country = ({ country }) => {
  console.log(country);
  const { name } = country;
  return (
    <div>
      <h3>name: {name.common} </h3>
      <h4>official name: {name.official}</h4>
    </div>
  );
};

export default Country;
