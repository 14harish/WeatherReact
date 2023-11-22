import React from "react";
import './forecast.css';

function Forcast(forecast){
    // console.log(forecast.forecast.forecastday[0]);
    const studentList=forecast.forecast.forecastday.map((data,pos)=>{
        return(
        <div className="box">
        <div className="imgbox"><h1>{forecast.forecast.forecastday[pos].date}</h1><img src={forecast.forecast.forecastday[pos].day.condition.icon}/></div>
        <ul>
        <li><span id="s1">Sunrise:</span>{forecast.forecast.forecastday[pos].astro.sunrise}</li>
        <li><span id="s2">Sunset:</span>{forecast.forecast.forecastday[pos].astro.sunset}</li>
        <li><span id="s3">Moonrise:</span>{forecast.forecast.forecastday[pos].astro.moonrise}</li>
        <li><span id="s4">Moonset:</span>{forecast.forecast.forecastday[pos].astro.moonset}</li>
        <li><span id="s5">Average humidity:</span>{forecast.forecast.forecastday[pos].day.avghumidity}&deg;C</li>
        <li><span id="s6">Average temparture:</span>{forecast.forecast.forecastday[pos].day.avgtemp_c}&deg;C</li>
        <li><span id="s7">Condition:</span>{forecast.forecast.forecastday[pos].day.condition.text}</li>
        <li><span id="s8">Max temperature:</span>{forecast.forecast.forecastday[pos].day.maxtemp_c}&deg;C</li>
        <li><span id="s9">Max Wind</span>{forecast.forecast.forecastday[pos].day.maxwind_kph} kph</li>
        <li><span id="s10">Chance Of Rain</span>{forecast.forecast.forecastday[pos].day.daily_chance_of_rain}%</li>
        </ul>
        </div>
        );
    })
    return(
      <div className="maindiv">
        {studentList}
      </div>
    )
}

export default Forcast;