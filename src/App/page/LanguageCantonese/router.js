import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import LanguageCantonese from "./index";

function HomePage() {
  const { path } = useRouteMatch();
  return (
    <Router>
      <Switch>
        <Route exact path={path}>
          <LanguageCantonese />
        </Route>
      </Switch>
    </Router>
  );
}

export default HomePage;
