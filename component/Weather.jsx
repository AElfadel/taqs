import React from "react"
import Image from "next/image"

const Weather = ({ data }) => {
  console.log(data)
  console.log(data.weather[0].icon)

  return (
    <div className=" flex flex-col justify-between max-w-[500px] px-4 w-full h-[90vh] m-auto p-4 text-gray-300">
      {/* Top part */}
      
      <div className="flex justify-between pt-12">
        <div className="flex flex-col items-center"> 
      <Image 
      src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
      alt='icon' 
      width={100} height={100}
      />
      <p className="text-2xl">{data.weather[0].main}</p>
      </div>
            <p className="text-9xl">{data.main.temp.toFixed(0)}&#176;</p>

    </div>

{/*Bottom */}
<div className="bg-black/60 mb-48 rounded-3xl p-4">
  <p className="text-2xl text-center pb-4">Weather in {data.name}</p>

  <div className="flex justify-between">
    <div className="flex">
      <p className="text-xl">Feels like&nbsp; </p>
      <p className="text-xl">{data.main.feels_like.toFixed(0)}&#176;</p>
    </div>
    <div className="flex">
    <p className="text-xl">Humidity&nbsp; </p>
    <p className="text-xl">{data.main.humidity}%</p>
    </div>
    <div className="flex">
    <p className="text-xl">Wind&nbsp; </p>
    <p className="text-xl">{data.wind.speed.toFixed(0)}&nbsp;KPH</p>
    </div>
  </div>
</div>
    </div>
  )

}
export default Weather;