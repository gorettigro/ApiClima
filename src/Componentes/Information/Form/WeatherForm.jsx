import React from "react";

const WeatherForm = ({ handleCity, handleSearchWeather }) => {
  return (
    <div class="font-sans">
        <div class="container grid justify-center h-full mx-auto mt-10">
            <div class="w-full max-w-lg">
                <div class="leading-loose">
                    <form action="" onSubmit={e => handleSearchWeather(e)} class="max-w-sm p-10 m-auto bg-white bg-opacity-25 rounded shadow-xl">
                        <p class="mb-8 text-2xl font-light text-center text-white">
                          Busca tu Ciudad
                        </p>
                        <div class="mb-2">
                          <div class=" relative ">
                            <input type="text" placeholder="City Name" onChange={({ target }) => handleCity(target)} class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                          </div>
                        </div>
                        <div class="mb-2">
                          <div class="flex items-center justify-between mt-4">
                            <input type="submit" value="Search !" class="py-2 px-4  bg-azulpastel hover:bg-verdete focus:ring-indigo-500 focus:ring-offset-indigo-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " />
                          </div>
                        </div>
                    </form>
                  </div>
             </div>
        </div>
      </div>
  );
};

export default WeatherForm;