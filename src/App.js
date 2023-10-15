import React, { useState } from "react";
import Form from "./components/Form";
import './styles/App.scss'
import { weatherTypes } from "./modules/weatherTypes";

function App() {
  const [weatherImg, setWeatherImg] = useState(null);
  const [apiData, setApiData] = useState(null)
  const [local, setLocal] = useState('');

  function changeLocal(event){
    setLocal(event.target.value);
  }

  async function fetchWeather(e){
    e.preventDefault();
    try{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=pt_br`)
      
      const info = await response.json();
      setApiData(info);
      setWeatherImg(weatherTypes.filter(item => item.type==info.weather[0].main)[0].img)
    }
    catch{
      return;
    }
  }

  return (
    <div>
      <Form changeLocal={changeLocal} value={local} apiData={apiData} weatherImg={weatherImg} fetchWeather={fetchWeather}></Form>
    </div>
  );
}

export default App;
