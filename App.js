import React from "react";
import cities from "./data";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <div className="app">
        {cities.map((listedCities, index) => (
          <WeatherCard key={index} data={listedCities} />
        ))}
      </div>
    </>
  );
}

export default App;
