import React from "react";
import './current.css';
function Current({current,city}){
    return(
    <div className="main_current">
    <div className="current">
       <div className="heading"><h1>{city.name}-{city.region}-{city.country}</h1></div>
       <img src={current.condition.icon} alt="img"/>
       <ul>
       <li>Condition:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{current.condition.text}</li>
       <li>Date: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{current.last_updated}</li>
       <li>Temp: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{current.temp_c}&deg;C</li>
       <li>Wind Speed: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{current.wind_kph} Kph</li>
       <li>Wind direction: &nbsp;&nbsp;{current.wind_dir}</li>
       <li>humudutiy: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{current.humidity}&deg;C</li>
       </ul>
    </div>
    </div>
    )
} 

export default Current;