import React from "react";
import LoginPage from "./pages/loginPage";
import DashBoard from "./pages/dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <DashBoard />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
