import React, { useState } from "react";
import cities from "./data";
import WeatherCard from "./components/WeatherCard";
import Location from "./components/Location";

function App() {
  const [location, setLocation] = useState("Sydney");
  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <Location data={cities} location={location} setLocation={setLocation} />
      <div className="app">
        {cities.map((listedCities, index) => (
          <WeatherCard key={index} data={listedCities} />
        ))}
      </div>
    </>
  );
}

export default App;
