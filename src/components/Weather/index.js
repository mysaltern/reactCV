import React, { useEffect, useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../../api";
import Form from 'react-bootstrap/Form';
import './index.scss'
function Weather() {
  const [weather, setWeather] = useState([]);
  const [weatherDesc, setWeatherDesc] = useState([]);
  const [weatherDegree, setWeatherDegree] = useState([]);
  const [city, setCity] = useState(['Tehran']);
  const [cityPre, setCityPre] = useState(['Tehran']);
  const [icon, setIcon] = useState(['01d']);
  function searchLocation  (e) {
    if(e.key ==="Enter"){
      setCity( e.target.value );
      fetchData();
    }

  };

  const fetchData = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`)
          .then((response) => response.json())
          .then((data) => { 
            setWeather(data);
            setCity(data.name); 
            setCityPre(data.name); 
            setWeatherDegree(data.main['temp']); 
            setWeatherDesc(data['weather'][0].description); 
            setIcon(data['weather'][0].icon); 
          });
  }

  useEffect(() => {
    fetchData();
   
  },[])
  return (
    <div>
  <Form.Control
        type="text"
        id="cityName"
        onKeyPress={searchLocation}
        onChange={event =>setCity(event.target.value)}
        placeholder="City Name"
        aria-label="Disabled input example"
      />
<h1>{cityPre} :  {weatherDegree}° {weatherDesc} <img src={"https://openweathermap.org/img/wn/" + icon +"@2x.png"}  /></h1>

    </div>

  );
}
export default Weather;