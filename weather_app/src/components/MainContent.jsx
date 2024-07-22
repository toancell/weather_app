import { WiHumidity } from "react-icons/wi";
import { CiTempHigh } from "react-icons/ci";
import { FaWind } from "react-icons/fa";
import { BsFillSunriseFill } from "react-icons/bs";
import { BsSunsetFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import {getWeatherData} from "../api/getWeatherData";
const MainContent = () => {
  const search_inf = useSelector((state) => state.search);
  const [weatherData, setWeatherData] = useState(null);
  const [initialWeatherData, setInitialWeatherData] = useState(false);
  const [currentCityTime, setCurrentCityTime] = useState(null);
  useEffect(() => {
    const fetchWeatherData = async () => {
      try { 
        let data;
        if (!initialWeatherData) {
          data = await getWeatherData();
         
          setInitialWeatherData(true);
          
        } else {
          data = await getWeatherData(search_inf.city, search_inf.country_code);
        }
        
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    
      fetchWeatherData();
    
  }, [search_inf, initialWeatherData]);

  useEffect(() => {
    if (weatherData) {
      const updateCityTime = () => {
        const timezoneOffset = weatherData.timezone; 
        const utcTime = Date.now() + new Date().getTimezoneOffset() * 60000; 
        const localTime = new Date(utcTime + timezoneOffset * 1000); 
        setCurrentCityTime(localTime);
      };

      updateCityTime();
      const timer = setInterval(updateCityTime, 1000);

      return () => clearInterval(timer);
    }
  }, [weatherData]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }
  const { name, weather, main, clouds, sys } = weatherData;
  
  return (
    <div className="flex flex-col justify-center items-center py-4 text-white">
      <div className="mb-5">
        <p>Current Time: {currentCityTime?.toLocaleString()}</p>
      </div>
      <h1 className="text-6xl">{name}, {sys.country}</h1>
      <h2 className="text-white my-3 text-xl ">{weather[0].main}</h2>
      <div className="flex flex-row justify-between items-center w-full">
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          className="w-[50px]"
          alt=""
        />
        <span className="text-2xl">{Math.round(main.temp -273)}°C</span>
        <div className="flex flex-col items-start">
          <div className="flex items-center justify-center gap-1">
            <CiTempHigh />
            <a href="">: {Math.round(main.temp_max - 273)}°C</a>
          </div>
          <div className="flex items-center justify-center gap-1">
            <WiHumidity />
            <a href="">: {main.humidity} %</a>
          </div>
          <div className="flex items-center justify-center gap-1">
            <FaWind />
            <a href="">: {clouds.all} m/s </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <div className="flex items-center justify-center gap-1">
          <BsFillSunriseFill />
          <a href="">
            Rise : {new Date(sys.sunrise * 1000).toLocaleTimeString()}
          </a>
        </div>
        <div className="flex items-center justify-center gap-1">
          <BsSunsetFill />
          <a href="">
            Set : {new Date(sys.sunset * 1000).toLocaleTimeString()}
          </a>
        </div>
      </div>
      <div className="w-full space-y-3">
        <h3 className="text-center">HOUR FORECAST</h3>
        <div className="w-full border-t-2 py-2 border-black flex items-center justify-between ">
          {/* {weatherData.hourly.map((hour, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <p>{new Date(hour.dt * 1000).toLocaleTimeString()}</p>
              <p><img src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`} className="w-[50px]" alt="Weather Icon" /></p>
              <p>{hour.temp}°C</p>
            </div>
          ))} */}
        </div>
      </div>
      
    </div>
  );
};

export default MainContent;
