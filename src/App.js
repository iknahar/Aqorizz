import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RingLoader from "react-spinners/RingLoader";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Header from "./compoent/Shared/Header";
import Home from "./compoent/Home/Home/Home";
import RightAquarium from "./compoent/Home/Articel/RightAquarium";
import WhatKind from "./compoent/Home/Articel/WhatKins";
import Lipsome from "./compoent/Home/Articel/Lipsam";
import { useEffect, useState } from "react";

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;
function App() {
  const [loadin, setLoading] = useState(false);
  let [color, setColor] = useState("#00FFFF");
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <div>
        <div className="">
          {loadin ? (
            <div className="spiner-style App">
              <RingLoader color={color} loading={loadin} size={150} />
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </>
  );
}

export default App;
