import React from "react";

//Router
import { useNavigate } from "react-router-dom";

const CityInformation = ({name, clima, icon, description}) => {

  //hooks router
  const navigate = useNavigate();

  //Funciones
  const handleNavigate = () => {
    console.log(navigate);
    navigate(`/weather/${name}`);
  };

  const temp = clima - 274;
  const tempe = temp.toFixed();
  const urlIcon = `http://openweathermap.org/img/w/${icon}.png`

  return (
    <div class="grid justify-items-center mt-10 flex justify-center">
        <form>
            <div class="weather-card relative max-w-sm p-10 m-auto bg-white bg-opacity-75  rounded shadow-xl">
                <div class="weather-icon"></div>
                    <img src={urlIcon} class="w-20 h-20"/>
                    <p class="text-m md:text-3xl text-gris text-left">{description}</p>
                    <p type="number" class="text-5xl text-gris text-left ">{tempe}ºC </p>
                    <p class="text-m md:text-3xl text-gris text-left">{name}</p>
             </div>
            <button type="submit" onClick={handleNavigate} class="py-2 mt-10 px-4  bg-naranjapastel hover:bg-naranjapastel-700 focus:ring-naranjapastel-500 focus:ring-offset-naranjapastel-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">See More</button>
        </form>
    </div>
  );
};

export default CityInformation;