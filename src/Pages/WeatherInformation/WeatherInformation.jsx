import React, { useState, useEffect } from "react";
//Router
import { useNavigate, useParams } from "react-router-dom";

import Weather from "../../Componentes/Information/Weather/Weather"

const WeatherInformation = () => {

    const [weatherInformation, setWeatherInformation] = useState(null);

  //hooks router
  const navigate = useNavigate();
  const {name} = useParams();

  console.log({name});

//   const name = params.*[1];
//   console.log(name);  

  //Funciones

  useEffect(() => {
    setWeatherInformation([]);
    const handleWeather = async () => {
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=3b64811efc88b7df0733960b3fab83c3`;
        const response = await fetch(API);
        const result = await response.json();
        console.log(result);
        setWeatherInformation(result);
        };
    handleWeather();
  }, [name]);
  
  return (
    <div>
      {weatherInformation ? 
          <Weather 
            name={weatherInformation.name}
            weather={weatherInformation.weather} 
            main={weatherInformation.main}
            wind={weatherInformation.wind}
            coun={weatherInformation.sys}
           /> : null
      }
      <button onClick={() => navigate(-1) } class="px-6 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none" >Regresar</button>
    </div>
  );
};

export default WeatherInformation;