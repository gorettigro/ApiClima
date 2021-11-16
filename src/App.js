import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//Views
import Home from "./Pages/Home/Home";
import WeatherInformation from "./Pages/WeatherInformation/WeatherInformation";
import MainLayout from './Componentes/Custom/MainLayout/MainLayout';

function App() {
  //JSX

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="weather/:name" element={<WeatherInformation />}/> 
        </Routes>
      </MainLayout>

    </BrowserRouter>
  );
}

export default App;

//Props, state, hooks
