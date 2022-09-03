import React from "react";
import Home from "./components/Home";
import NavBar from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <AboutMe />
            </Route>
            {/* <Route path="*">
                <NotFound />
              </Route> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
