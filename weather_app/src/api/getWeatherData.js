import axios from "axios";
const API_WEATHER_KEY = "0b522db660df9ab24a36b023958469c7";
const getWeatherData = async (city="Hanoi", country_code="vn") => {
  const url = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather`,
    {
      params: {
        q: `${city}, ${country_code}`,
        APPID: API_WEATHER_KEY,
      },
    }
  );
  if (!url) throw new Error("Not found city");
  const data = url.data;
  return data;
};


const getDailyWeatherData = async (city="Hanoi", country_code="vn") =>{
  const urlDaily = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast`,
    {
      params: {
        q: `${city}, ${country_code}`,
        APPID: API_WEATHER_KEY,
      },
    }
  );
  if(!urlDaily) throw new Error("something went wrong")
    const dataDaily = urlDaily.data;
  return dataDaily;
}
export {getDailyWeatherData, getWeatherData};