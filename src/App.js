import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Home from '../src/Pages/Home/Home/Home';


function App() {

  return (
    <div className="App">
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
