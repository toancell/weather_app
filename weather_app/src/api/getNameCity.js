import axios from "axios"
const API_WEATHER_KEY = "0b522db660df9ab24a36b023958469c7";
const getNamecity = async (value) => {
    try{
        const nameCity = await axios.get(`http://api.openweathermap.org/data/2.5/find?q=${value}&type=like&sort=population&cnt=5&appid=${API_WEATHER_KEY}`)
        return nameCity
    }catch(err){
        throw new Error(err)
    }
}
export default getNamecity