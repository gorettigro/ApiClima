import React, { useState, useEffect } from "react";
//Router
import { useNavigate, useParams} from "react-router-dom";

import Weather from "../../Componentes/Information/Weather/Weather"
import Loader from "../../Componentes/Custom/Loader/Loader"

const WeatherInformation = () => {

  let [extraInformation,setExtraInformation] = useState(null);
  const [loader, setLoader] = useState(false);

  //hooks router
  const navigate = useNavigate();
  const {name} = useParams(); 

  //Funciones

  useEffect(() => {
    const handleWeather = async () => {
      // e.preventDefault();
      setLoader(true);
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=3b64811efc88b7df0733960b3fab83c3`;
      const response = await fetch(API);
      const result = await response.json();
      setExtraInformation(result);
      setLoader(false);
      console.log(result);
      console.log(extraInformation);
    };
    handleWeather();
  }, []);

  return (
    <div>
      {extraInformation ? (
            <Weather 
              nombre={extraInformation.name}
              temp={extraInformation.main.temp}
              tempmax={extraInformation.main.temp_max}
              tempmin={extraInformation.main.temp_min}
              feels={extraInformation.main.feels_like}
              pais={extraInformation.sys.country}
              icon={extraInformation.weather[0].icon}
              despcription={extraInformation.weather[0].description}
              aire={extraInformation.wind.speed}
            />) : (
            <Loader />
          )}
      <button onClick={() => navigate(-1) } class="px-6 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none" >Regresar</button>
    </div>
  );
};

export default WeatherInformation;