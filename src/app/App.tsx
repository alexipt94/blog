import { Suspense} from "react";
import { Route, Routes, Link } from "react-router-dom";
import './styles/index.scss';

import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";




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
        
        <Route path={'/about'} element={<AboutPage />}/>
        <Route path={'/'} element={< MainPage  />} />
       
      </Routes>

      </Suspense>
      </div>
  )
}

export default App;