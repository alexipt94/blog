import { Suspense, useContext, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";

import './styles/index.scss';

import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/Mainpage.async";
import { BADHINTS } from "dns";
import { Theme, ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/UseTheme";
import { classNames } from "./helpers/classNames/classNames";



const App = () => {
const {theme, toggleTheme} = useTheme();
const bool = true;
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>{`${theme} theme`}</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
     
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        
        <Route path={'/about'} element={<AboutPageAsync />}/>
        <Route path={'/'} element={<MainPageAsync />} />
       
      </Routes>

      </Suspense>
      </div>
  )
}

export default App;