import React, { useState } from "react";
import axios from "axios";
import CodeDisplay from "./WeatherCode";

const WeatherApp = () => {
  const [zipCode, setZipCode] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "182215c43129201f6d461efc8568fcc0";

  const fetchWeather = async (e) => {
    e.preventDefault();
    setError(null);
    setWeather(null);
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${API_KEY}&units=imperial`
      );
      setWeather(response.data);
    } catch (err) {
      console.error("Error details:", err);
      setError(`Unable to fetch weather data: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Weather App</h1>

      <h2 className="mt-5">About This Weather App</h2>
      <p>
        This weather app allows users to enter a ZIP code and retrieve the
        current weather information for that area. It utilizes the
        OpenWeatherMap API to fetch real-time weather data.
      </p>
      <p>Key features of this weather app include:</p>
      <ul>
        <li>Displaying the current temperature in Fahrenheit.</li>
        <li>Showing how the temperature feels like.</li>
        <li>Providing a brief description of the weather conditions.</li>
        <li>Displaying humidity levels.</li>
        <li>Showing wind speed in miles per hour.</li>
      </ul>

      <form onSubmit={fetchWeather} className="d-flex mb-4">
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          placeholder="Enter ZIP code"
          className="form-control me-2"
        />
        <button type="submit" className="btn btn-primary">
          Get Weather
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <div className="alert alert-danger">{error}</div>}

      {weather && (
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{weather.name}</h2>
            <p className="card-text">
              Temperature: {Math.round(weather.main.temp)}°F
            </p>
            <p className="card-text">
              Feels like: {Math.round(weather.main.feels_like)}°F
            </p>
            <p className="card-text">
              Condition: {weather.weather[0].description}
            </p>
            <p className="card-text">Humidity: {weather.main.humidity}%</p>
            <p className="card-text">
              Wind Speed: {Math.round(weather.wind.speed)} mph
            </p>
          </div>
        </div>
      )}
      <CodeDisplay />
    </div>
  );
};

export default WeatherApp;
