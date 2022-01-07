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
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {

  return (
    <div>

      {/* <OurServices /> */}
      {/* <Banner /> */}
      <Shop />
      <AboutUs />
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
