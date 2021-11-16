import React from 'react';


function Error () {
    return(
        <div className="flex justify-center items-center 5 pt-4">
            <div class=" w-21 bg-white bg-opacity-50 border-red2 text-red border-l-4" role="alert">
                <p class="font-bold text-l sm:text-2xl">
                    Error
                </p>
                <p class="text-xs sm:text-xl">
                    Esta Ciudad no existe
                </p>
                </div>
            </div>
           
    );
};

export default Error;