import { useEffect, useState } from "react";
import { Image } from "./Image";
function App() {
  const [searchCity, setSearchCity] = useState("London");
  const [weather, setWeather] = useState({});
  const API_KEY = "27549d1f8a5a7a914ecde80d636a7007";
  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((json) =>
        setWeather({
          city: json.name,
          humidity: json.main.humidity,
          title: json.weather[0].main,
          windSpeed: json.wind.speed,
          temp: json.main.temp,
          image: json.weather[0].icon,
          feelsLike: json.main.feels_like,
        })
      );
  };
  useEffect(() => {
    fetchWeather();
  }, []);
  return (
    <div className="">
      <div className="absolute inline px-40">
        <div className="mt-16 mx-auto">
          <input
            onChange={(event) => setSearchCity(event.target.value)}
            className="pr-60 outline-none rounded-full border-2 p-3"
            type="text"
            placeholder="Search City..."
          />
          <img
            role="button"
            onClick={fetchWeather}
            className="ml-3 p-1 inline h-14 -mt-1 rounded-full bg-white border-2"
            src="../src/assets/search-icon.png"
            alt=""
          />
        </div>
        <h1 className="mt-32 text-center font-sans text-8xl">
          {Math.round(weather.temp - 273.15)}°C
        </h1>
        <hr className="mx-44 my-2" />
        <h1 className="text-center text-3xl">{weather.city}</h1>
      </div>
      <main className="px-32 bg-slate-700 bg-opacity-85 h-screen inline-table float-right">
        <div>
          <Image weather={weather} />
        </div>
        <h1 className="text-center text-6xl -mt-12">{weather.title}</h1>
        <div className="text-2xl mt-20">
          <div>
            <h1 className="inline -ml-16">Feels Like</h1>
            <h1 className="inline float-right -mr-16">
              {Math.round(weather.feelsLike - 273.15)}°C
            </h1>
          </div>
          <hr className="my-4 -mx-3" />
          <div>
            <h1 className="inline -ml-16">Wind Speed</h1>
            <h1 className="inline float-right -mr-16">
              {weather.windSpeed} KM/H
            </h1>
          </div>
          <hr className="my-4 -mx-3" />
          <div>
            <h1 className="inline -ml-16">Humidity</h1>
            <h1 className="inline float-right -mr-16">{weather.humidity} %</h1>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
