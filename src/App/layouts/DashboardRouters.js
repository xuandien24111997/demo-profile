import React from "react";
import Header from "App/layouts/Header";
import Footer from "App/layouts/Footer";
import {
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import HomeDefault from "App/page/Home";
import LanguageCantonese from "App/page/LanguageCantonese";
import TimeLine from "App/page/Time";
import Directions from "App/page/LanguageCantonese/Directions";
import FingerCounting from "App/page/FingerCounting";
import HandGestures from "App/page/HandGestures";
import Alphabet from "App/page/Alphabet";
import Phrases from "App/page/Phrases";
import NumbersClassifieds from "App/page/NumbersClassifieds";
import AboutUs from "App/page/AboutUs";
import ContactUs from "App/page/ContactUs";
import Quiz from "App/page/Quiz";
import SelectLanguage from "App/page/SelectLanguage";
import Contributes from "App/page/Contributes";
import External from "App/page/External";
import Acknowledgement from "App/page/Acknowledgement";
import NotFoundPage from "App/page/NotFoundPage";
import { connect } from "react-redux";
import ThemeChoose from "App/page/Profile_MSY_Project";

function DashboardRouters({ match: { url }, getListLanguagesAction }) {
  return (
    <>
      {/* <Header /> */}
      <Switch>
        <Route path={`${url}`} exact component={ThemeChoose} />
        <Route path={`${url}more-about`} exact component={LanguageCantonese} />
        <Route path={`${url}time`} exact component={TimeLine} />
        <Route path={`${url}directions`} exact component={Directions} />
        <Route
          path={`${url}finger-counting`}
          exact
          component={FingerCounting}
        />
        <Route path={`${url}hand-gestures`} exact component={HandGestures} />
        <Route path={`${url}alphabet`} exact component={Alphabet} />
        <Route path={`${url}phrases`} exact component={Phrases} />
        <Route
          path={`${url}numbers-classifieds`}
          exact
          component={NumbersClassifieds}
        />
        <Route path={`${url}about-us`} exact component={AboutUs} />
        <Route path={`${url}quiz`} exact component={Quiz} />
        <Route
          path={`${url}select-language`}
          exact
          component={SelectLanguage}
        />
        <Route path={`${url}contact-us`} exact component={ContactUs} />
        <Route path={`${url}contributes`} exact component={Contributes} />
        <Route path={`${url}external-resources`} exact component={External} />
        <Route
          path={`${url}acknowledgement`}
          exact
          component={Acknowledgement}
        />
        <Route path="" exact component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  const { getListLanguagesAction } = require("redux/adminLanguagesRedux");
  return {
    getListLanguagesAction: (data) => dispatch(getListLanguagesAction(data)),
  };
};
export default connect(null, mapDispatchToProps)(withRouter(DashboardRouters));
