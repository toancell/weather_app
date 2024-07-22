
import { useSelector } from "react-redux"
import { useState } from "react"
import { useEffect } from "react"
import {getDailyWeatherData} from "../api/getWeatherData"
const DailyFocast = () => {
    const data = useSelector((state) => state.search)
    const [dailyForecast, setDailyForecast] = useState([])
    useEffect(()=>{
        const getDailyData= async () =>{
            const result = await getDailyWeatherData(data.city, data.country_code)
            setDailyForecast(result.list)
        }
        getDailyData()
        
    }, [data])
    console.log(dailyForecast)
  return (
    <div className="w-full space-y-3">
        <h3 className="text-center">DAILY FORECAST</h3>
        <div className="w-full border-t-2 py-2 border-black flex items-center justify-between ">
          <div className="flex flex-col items-center justify-center">
            <p>Wed</p>
            <p>
              <img src="./sunImg.png" className="w-[50px]" alt="" />
            </p>
            <p>14oC</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p>Thu</p>
            <p>
              <img src="./sunImg.png" className="w-[50px]" alt="" />
            </p>
            <p>14oC</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p>Fri</p>
            <p>
              <img src="./sunImg.png" className="w-[50px]" alt="" />
            </p>
            <p>14oC</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p>Sat</p>
            <p>
              <img src="./sunImg.png" className="w-[50px]" alt="" />
            </p>
            <p>14oC</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p>Sun</p>
            <p>
              <img src="./sunImg.png" className="w-[50px]" alt="" />
            </p>
            <p>14oC</p>
          </div>
        </div>
      </div>
  )
}

export default DailyFocast
