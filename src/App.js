
import './App.css';
import React, {useEffect, useState } from "react";
import axios from 'axios';
import Current from './current';
import Forcast from './forcast';

function App() {

  const [city,setCity]=useState("");
  const [auto,setAuto]=useState([]);
  const [current,setCurrent]=useState();
  const [location,setLocation]=useState();
  const [forcast,setForcast]=useState();
    function handle(ele){
      let ar=ele.split(",");
      console.log(ar[0]);
      setCity(ar[0]);
      console.log(ele);
      axios.get(`https://api.weatherapi.com/v1/forecast.json?key=9ec06796b6b24e7482681929231903&q=${city}&days=7&aqi=no&alerts=yes`)
      .then((res)=>{
        setCity(ele);
        console.log(res.data);
        setCurrent(res.data.current);
        setForcast(res.data.forecast);
        // console.log(forcast.forecastday[0]);
        setLocation(res.data.location);
      }).catch((error) => {
        // Handle errors
        console.error('Error fetching weather data:', error);
      });
    }

  useEffect(()=>{
    async function get(){
      await axios.get(`http://api.weatherapi.com/v1/search.json?key=9ec06796b6b24e7482681929231903&q=${city}&days=7&aqi=yes&alerts=yes`)
      .then(res=>{
        const autocomplete=res.data.map((data)=>{
          return `${data.name},${data.region},${data.country}`
        })
        setAuto(autocomplete);
      })
    }
  get();
  },[city])
  
  return (
    <div className="App">
    <div className='header'>
    <h1>Weather Report</h1>
    </div>
    <div className='main'>
    <div className='container'>
    <label>Enter the City</label>
    <input type="text" value={city} onChange={(e)=>setCity(e.target.value)}/>
    </div>
    <div className='auto'>
    {auto.map(data1=>{
      return(
      <div className='pt' onClick={()=>{handle(data1)}}>{data1}</div>
     )
    })}
    </div>
    </div>  
    {current && <Current current={current} city={location}/>}
    {forcast && <Forcast forecast={forcast}/>}
    </div>
  );
}

export default App;
