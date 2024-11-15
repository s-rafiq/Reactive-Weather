import React from "react";
import WeatherCard from "./WeatherCard";
function Location({ location, data }) {
  // Find the city data that matches the location prop
  const cityData = data.find((object) => object.city === location);
  return (
    <div>
      {cityData ? <WeatherCard data={cityData} /> : <p>Location not found</p>}
    </div>
  );
}
export default Location;
