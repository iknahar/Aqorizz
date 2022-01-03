import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home';
import OurServices from './components/OurServices/OurServices';


function App() {

  return (
    <>
      <OurServices />
    </>
  );
}

export default App;
