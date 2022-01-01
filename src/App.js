import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';






function App() {
 
  return (
    <div className="App">
      <AuthProvider>
        <Router>
       
        <Switch>
        
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
       
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
