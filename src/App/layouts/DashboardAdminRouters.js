import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import Languages from "App/page/Admin/Languages";
import Time from "App/page/Admin/Time";
import Quizzes from "App/page/Admin/Quizzes";
import Directions from "App/page/Admin/Directions";
import FingerCounting from "App/page/Admin/FingerCounting";
import Phrases from "App/page/Admin/Phrases";
import HandGestures from "App/page/Admin/HandGestures";
import NumbersClassifieds from "App/page/Admin/NumbersClassifieds/Numbers";
import Alphabet from "App/page/Admin/Alphabet/AAlphabet";
import AboutAlphabet from "App/page/Admin/Alphabet/AboutAlphabet";
import CurrencyUnit from "App/page/Admin/NumbersClassifieds/CurrencyUnit";
import Classifieds from "App/page/Admin/NumbersClassifieds/Classifieds";
import ClassifiedsChild from "App/page/Admin/NumbersClassifieds/ClassifiedsChild";
import Settings from "App/page/Admin/Setting"
import Country from "App/page/Admin/Country"

function DashboardAdminRouters({ match: { url } }) {
  return (
    <Switch>
      <Route path={`${url}/languages/list`} exact component={Languages} />
      <Route path={`${url}/quizzes/list`} exact component={Quizzes} />
      <Route path={`${url}/time/list`} exact component={Time} />
      <Route path={`${url}/directions/list`} exact component={Directions} />
      <Route
        path={`${url}/finger-counting/list`}
        exact
        component={FingerCounting}
      />
      <Route path={`${url}/phrases/list`} exact component={Phrases} />
      <Route
        path={`${url}/hand-gestures/list`}
        exact
        component={HandGestures}
      />
      <Route
        path={`${url}/numbers-classifieds`}
        exact
        component={NumbersClassifieds}
      />
      <Route
        path={`${url}/alphabet/list`}
        exact
        component={Alphabet}
      />
      <Route
        path={`${url}/about-alphabet/list`}
        exact
        component={AboutAlphabet}
      />
      <Route
        path={`${url}/currency-unit/list`}
        exact
        component={CurrencyUnit}
      />
      <Route path={`${url}/classifieds/list`} exact component={Classifieds} />
      <Route
        path={`${url}/classified-child/list`}
        exact
        component={ClassifiedsChild}
      />
      <Route path={`${url}/setting`} exact component={Settings} />
      <Route path={`${url}/country`} exact component={Country} />
      <Redirect to="/errors/404" />
    </Switch>
  );
}

export default withRouter(DashboardAdminRouters);
