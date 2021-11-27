import React, { useState } from "react";

//Components
import WeatherForm from "../../Componentes/Information/Form/WeatherForm";
import CityInformation from "../../Componentes/Information/CityInformation/CityInformation";
import Loader from "../../Componentes/Custom/Loader/Loader";
import Error from "../../Componentes/Custom/Error/Error"

const Home = () => {
  //State
  const [cityName, setCityName] = useState("");
  const [cityInformation, setCityInformation] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  //Funciones
  const handleCity = ({ value }) => {
    setCityName(value);
  };

  const handleSearchWeather = async e => {
    e.preventDefault();
    setCityInformation(null);
    setLoader(true);
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3b64811efc88b7df0733960b3fab83c3`;
    const response = await fetch(API);
    const result = await response.json();
    console.log(result);
    if(result.cod === 200){
        setError(false);
        setCityInformation(result);
        console.log(cityInformation);
        setLoader(false);
        return;
    }else{
      setError(true);
      setLoader(false);
      return;
    }
  };

  return (
    <div>
      <WeatherForm
        handleCity={handleCity}
        cityName={cityName}
        handleSearchWeather={handleSearchWeather}
      />
      {
          (error) ? (<Error/>) : null
      }
      {loader && <Loader />}
      {
        (cityInformation != null && !error ) ? 
          <CityInformation 
            name={cityInformation.name} 
            icon={cityInformation.weather[0].icon}
            clima={cityInformation.main.temp}
            description={cityInformation.weather[0].description}
            /> : null
      }
      
    </div>
  );
};

export default Home;