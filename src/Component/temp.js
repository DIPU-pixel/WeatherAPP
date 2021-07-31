import React, { useState, useEffect } from "react";
import "./style.css";
import WeatherCard from "./WeatherCard";


const Temp = () => {
  const [searchValue, setSearchValue] = useState("assam");
  const [TempInfo,setTempInfo]=useState([]);
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=1f9056151913201757e4199f468351da`;

      const res= await fetch(url);
      const data =await res.json();
     const {temp,pressure,humidity}=data.main;
        
     const {main:weathermood}=data.weather[0];
     const{name}=data;
     const {speed}=data.wind;
     const {country,sunset}=data.sys;

     const MyNewWeatherInfo ={
        temp,
        pressure,
        humidity,
        weathermood,
        name,
        speed,
        country,
        sunset
    };
    setTempInfo(MyNewWeatherInfo)

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  },);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search...."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />

          <button className="searchButton" type="button">
            search
          </button>
        </div>
      </div>
      {/* our  temp card */}
      <WeatherCard TempInfo={TempInfo}/>
      
    </>
  );
};

export default Temp;
