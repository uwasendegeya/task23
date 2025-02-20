import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import React from "react";

function Routing() {
  return (
    <Router>
      <Switch> 
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}
export default Routing;
