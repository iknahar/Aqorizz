import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home';
import OurServices from './components/OurServices/OurServices';
import Banner from './components/Banner/Banner';
import Shop from './components/Shop/Shop/Shop';
import './App.css';
import AboutUs from "./components/AboutUs/AboutUs/AboutUs";

function App() {

  return (
    <>

      {/* <OurServices /> */}
      {/* <Banner /> */}
      {/* <Shop /> */}
      <AboutUs />
    </>
  );
}

export default App;
