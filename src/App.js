import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Header from "./compoent/Shared/Header";
import Home from "./compoent/Home/Home/Home";
import RightAquarium from "./compoent/Home/Articel/RightAquarium";
import WhatKind from "./compoent/Home/Articel/WhatKins";
import Lipsome from "./compoent/Home/Articel/Lipsam";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/right">
              <RightAquarium></RightAquarium>
            </Route>
            <Route path="/whatKind">
              <WhatKind></WhatKind>
            </Route>
            <Route path="/lipsam">
              <Lipsome></Lipsome>
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
