import React from "react";

const Weather = props => {
    const { nombre, temp, tempmax, tempmin, feels, pais, description, aire, icon} = props
     
    const clima = temp - 273;
    const clima1 = tempmax - 273;
    const clima2 = tempmin - 273;
    const clima3 = feels - 273;
    const tempe = clima.toFixed();
    const tempe1 = clima1.toFixed();
    const tempe2 = clima2.toFixed();
    const tempe3 = clima3.toFixed();
    const urlIcon = `http://openweathermap.org/img/w/${icon}.png`

    return(
        
        <section class="bg-gradient bg-indigo-500 dark:bg-gray-800 py-8 md:py-16">
            <div class="max-w-5xl mx-auto px-5 box-content">
                <div class="flex items-center flex-col md:flex-row -mx-5">
                    <div class="w-full px-5 mb-5 md:mb-0 text-center md:text-left">
                        <img src={urlIcon} class="w-20 h-20"/>
                        <h3 class="font-bold font-heading text-2xl md:text-6xl text-white">
                            {tempe} ºC  
                        </h3>
                        <h3 class="font-bold font-heading text-lg md:text-4xl text-white leading-tight">
                            {nombre}
                        </h3>
                        <h6>
                            {description}
                        </h6>
                    </div>
                    <div class="w-full md:w-auto px-5">
                        <div class="flex justify-center text-white text-center">
                            <div class="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                                <div class="text-l md:text-3xl font-semibold">
                                    <span>
                                        {tempe1} ºC 
                                    </span>
                                </div>
                                <div class="opacity-75 text-xs mt-3 uppercase">
                                    Temperatura Max.
                                </div>
                            </div>
                            <div class="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                                <div class="text-l md:text-3xl font-semibold">
                                    <span>
                                        {tempe2} ºC 
                                    </span>
                                </div>
                                <div class=" opacity-75 text-xs mt-3 uppercase">
                                    Temperatura Min
                                </div>
                            </div>
                            <div class="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                                <div class="text-l md:text-3xl font-semibold">
                                    <span>
                                        {tempe3} ºC
                                    </span>
                                </div>
                                <div class=" opacity-75 text-xs mt-3 uppercase">
                                    Sencación
                                </div>
                            </div>
                            <div class="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                                <div class="text-l md:text-3xl font-semibold">
                                    <span>
                                        {pais}
                                    </span>
                                </div>
                                <div class=" opacity-75 text-xs mt-3 uppercase">
                                    Pais
                                </div>
                            </div>
                            <div class="w-20 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                                <div class="text-l md:text-3xl font-semibold">
                                    <span>
                                        {aire} m/hr
                                    </span>
                                </div>
                                <div class="opacity-75 text-xs mt-3 uppercase">
                                    Velocidad del Aire
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );

};

export default Weather;