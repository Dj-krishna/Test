import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
export default function App(){
  return(
    <Router>
      <div>
          <Link to="/Home"><button>login</button></Link>
      </div>

      <Switch>
        <Route path="/Home" component="{Home}">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

