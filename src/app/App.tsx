
import { Link } from "react-router-dom";
import './styles/index.scss';

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";





const App = () => {
const {theme, toggleTheme} = useTheme();
const bool = true;
  return (
    <div className={classNames('app', {}, [theme])}>
      
      <Navbar />
     <AppRouter />
     <button onClick={toggleTheme}>{`${theme} theme`}</button>
      </div>
  )
}

export default App;