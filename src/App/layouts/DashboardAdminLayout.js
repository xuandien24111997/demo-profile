import React, { useEffect, useState } from "react";
import history from "ultils/history";
import DashboardRouters from "./DashboardAdminRouters";
import { useLocation } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Sidebar = ({ listLanguages, getListLanguagesAction }) => {
  const classes = useStyles();
  const location = useLocation();
  const [idLanguage, setIdLanguage] = useState("");

  useEffect(() => {
    let data = {
      Keyword: "",
      TotalOrderForOnePage: 99,
      PageNumber: 1,
      IsOrderNewASC: true,
    };
    getListLanguagesAction(data);
  }, []);

  useEffect(() => {
    setIdLanguage(JSON.parse(localStorage.getItem("idLanguage")));
  }, [localStorage.getItem("idLanguage")]);

  const onLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("idLanguage");
    history.push("/admin/login");
  };

  const handleChange = (e) => {
    setIdLanguage(e.target.value);
    localStorage.setItem("idLanguage", JSON.stringify(e.target.value));
  };

  return (
    <div className="dashboard-layout">
      <nav className="sidebar">
        <div className="sidebar__heading">
          <div className="sidebar-logo">
            <div className="sidebar-logo-image">
              <img alt="" src={require("assets/images/logo.png").default} />
            </div>
          </div>
        </div>

        <ul className="sidebar-list">
          <li
            className={`sidebar-item ${
              location.pathname.indexOf("/languages") !== -1 ? "active" : ""
            }`}
            onClick={() => {
              history.push("/admin/languages/list");
            }}
          >
            <div className="sidebar-item__img">
              <img
                alt=""
                src={require("assets/images/dashboard/languages.svg").default}
                width="16px"
                className="sidebar__icon"
              />
            </div>
            <spann className="sidebar-item__link">Languages</spann>
          </li>
          <li
            className={`sidebar-item ${
              location.pathname.indexOf("/time") !== -1 ? "active" : ""
            }`}
            onClick={() => {
              history.push("/admin/time/list");
            }}
          >
            <div className="sidebar-item__img">
              <img
                alt=""
                src={require("assets/images/dashboard/time.svg").default}
                width="16px"
                className="sidebar__icon"
              />
            </div>
            <span className="sidebar-item__link">Time</span>
          </li>
          <li
            className={`sidebar-item ${
              location.pathname.indexOf("/directions") !== -1 ? "active" : ""
            }`}
            onClick={() => {
              history.push("/admin/directions/list");
            }}
          >
            <div className="sidebar-item__img">
              <img
                alt=""
                src={require("assets/images/dashboard/directions.svg").default}
                width="16px"
                className="sidebar__icon"
              />
            </div>
            <spann className="sidebar-item__link">Directions</spann>
          </li>
          <li
            className={`sidebar-item ${
              location.pathname.indexOf("/finger-counting") !== -1
                ? "active"
                : ""
            }`}
            onClick={() => {
              history.push("/admin/finger-counting/list");
            }}
          >
            <div className="sidebar-item__img">
              <img
                alt=""
                src={
                  require("assets/images/dashboard/finger-counting.svg").default
                }
                width="16px"
                className="sidebar__icon"
              />
            </div>
            <spann className="sidebar-item__link">Finger Counting</spann>
          </li>
          <li
            className={`sidebar-item ${
              location.pathname.indexOf("/phrases") !== -1 ? "active" : ""
            }`}
            onClick={() => {
              history.push("/admin/phrases/list");
            }}
          >
            <div className="sidebar-item__img">
              <img
                alt=""
                src={require("assets/images/dashboard/phrases.svg").default}
                width="16px"
                className="sidebar__icon"
              />
            </div>
            <spann className="sidebar-item__link">Phrases</spann>
          </li>
          <li
            className={`sidebar-item ${
              location.pathname.indexOf("/hand-gestures") !== -1 ? "active" : ""
            }`}
            onClick={() => {
              history.push("/admin/hand-gestures/list");
            }}
          >
            <div className="sidebar-item__img">
              <img
                alt=""
                src={
                  require("assets/images/dashboard/hand-gestures.svg").default
                }
                width="16px"
                className="sidebar__icon"
              />
            </div>
            <spann className="sidebar-item__link">Hand Gestures</spann>
          </li>
          <li className={`sidebar-item sidebar-item__currency`}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  <div className="sidebar-item__img">
                    <img
                      alt=""
                      src={
                        require("assets/images/dashboard/numbers-classifieds.svg")
                          .default
                      }
                      width="16px"
                      className="sidebar__icon"
                    />
                    <spann className="sidebar-item__link">
                      Numbers &amp; classifieds
                    </spann>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <li
                  className={`sidebar-item ${
                    location.pathname.indexOf("/numbers-classifieds") !== -1
                      ? "active"
                      : ""
                  }`}
                  onClick={() => {
                    history.push("/admin/numbers-classifieds");
                  }}
                >
                  <div className="sidebar-item__img">
                    <img
                      alt=""
                      src={
                        require("assets/images/dashboard/number.svg").default
                      }
                      width="16px"
                      className="sidebar__icon"
                    />
                  </div>
                  <spann className="sidebar-item__link">Numbers</spann>
                </li>
                <li
                  className={`sidebar-item ${
                    location.pathname.indexOf("/currency-unit") !== -1
                      ? "active"
                      : ""
                  }`}
                  onClick={() => {
                    history.push("/admin/currency-unit/list");
                  }}
                >
                  <div className="sidebar-item__img">
                    <img
                      alt=""
                      src={
                        require("assets/images/dashboard/currency.svg").default
                      }
                      width="16px"
                      className="sidebar__icon"
                    />
                  </div>
                  <spann className="sidebar-item__link">Currency Unit</spann>
                </li>

                <li
                  className={`sidebar-item ${
                    location.pathname.indexOf("/classifieds") !== -1
                      ? "active"
                      : ""
                  }`}
                  onClick={() => {
                    history.push("/admin/classifieds/list");
                  }}
                >
                  <div className="sidebar-item__img">
                    <img
                      alt=""
                      src={
                        require("assets/images/dashboard/classified.svg")
                          .default
                      }
                      width="16px"
                      className="sidebar__icon"
                    />
                  </div>
                  <spann className="sidebar-item__link">Classifiers</spann>
                </li>

                <li
                  className={`sidebar-item ${
                    location.pathname.indexOf("/classified-child") !== -1
                      ? "active"
                      : ""
                  }`}
                  onClick={() => {
                    history.push("/admin/classified-child/list");
                  }}
                >
                  <div className="sidebar-item__img">
                    <img
                      alt=""
                      src={
                        require("assets/images/dashboard/classified-child.svg")
                          .default
                      }
                      width="16px"
                      className="sidebar__icon"
                    />
                  </div>
                  <spann className="sidebar-item__link">
                    Classifiers Child
                  </spann>
                </li>
              </AccordionDetails>
            </Accordion>
          </li>
          <li
            className={`sidebar-item ${
              location.pathname.indexOf("/quizzes") !== -1 ? "active" : ""
            }`}
            onClick={() => {
              history.push("/admin/quizzes/list");
            }}
          >
            <div className="sidebar-item__img">
              <img
                alt=""
                src={require("assets/images/dashboard/question.svg").default}
                width="16px"
                className="sidebar__icon"
              />
            </div>
            <spann className="sidebar-item__link">Quizzes</spann>
          </li>

          <li className={`sidebar-item sidebar-item__currency`}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-headers"
              >
                <Typography className={classes.heading}>
                  <div className="sidebar-item__img">
                    <img
                      alt=""
                      src={
                        require("assets/images/dashboard/az.svg")
                          .default
                      }
                      style={{opacity:"0.7"}}
                      width="16px"
                      className="sidebar__icon"
                    />
                    <spann className="sidebar-item__link">
                     Alphabet
                    </spann>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <li
                  className={`sidebar-item ${
                    location.pathname.indexOf("/alphabet") !== -1
                      ? "active"
                      : ""
                  }`}
                  onClick={() => {
                    history.push("/admin/alphabet/list");
                  }}
                >
                  <div className="sidebar-item__img">
                    <img
                      alt=""
                      src={
                        require("assets/images/dashboard/block.svg").default
                      }
                      width="16px"
                      style={{opacity:"0.7"}}
                      className="sidebar__icon"
                    />
                  </div>
                  <spann className="sidebar-item__link">A Alphabet</spann>
                </li>
                <li
                  className={`sidebar-item ${
                    location.pathname.indexOf("/about-alphabet") !== -1
                      ? "active"
                      : ""
                  }`}
                  onClick={() => {
                    history.push("/admin/about-alphabet/list");
                  }}
                >
                  <div className="sidebar-item__img">
                    <img
                      alt=""
                      src={
                        require("assets/images/dashboard/about.svg").default
                      }
                      width="16px"
                      style={{opacity:"0.7"}}
                      className="sidebar__icon"
                    />
                  </div>
                  <spann className="sidebar-item__link">About Alphabet</spann>
                </li>
              </AccordionDetails>
            </Accordion>
          </li>
          <li
            className={`sidebar-item ${
              location.pathname.indexOf("/setting") !== -1 ? "active" : ""
            }`}
            onClick={() => {
              history.push("/admin/setting");
            }}
          >
            <div className="sidebar-item__img">
              <img
                alt=""
                src={require("assets/images/settings.png").default}
                width="16px"
                className="sidebar__icon"
              />
            </div>
            <spann className="sidebar-item__link">Setting</spann>
          </li>
          <li
            className={`sidebar-item ${
              location.pathname.indexOf("/country") !== -1 ? "active" : ""
            }`}
            onClick={() => {
              history.push("/admin/country");
            }}
          >
            <div className="sidebar-item__img">
              <img
                alt=""
                src={require("assets/images/country.png").default}
                width="16px"
                className="sidebar__icon"
              />
            </div>
            <spann className="sidebar-item__link">Country</spann>
          </li>

          <li className={`sidebar-item `}>
            <div className="sidebar-item__img">
              <img
                alt=""
                src={require("assets/images/dashboard/logout.svg").default}
                width="16px"
                className="sidebar__icon"
              />
            </div>
            <span className="sidebar-item__link" onClick={onLogout}>
              Logout
            </span>
          </li>
        </ul>
      </nav>
      <div className="dashboard-layout__content">
        <div className="dashboard-layout__select">
          <FormControl className={classes.margin}>
            <InputLabel id="demo-customized-select-label">Languages</InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={idLanguage || ""}
              onChange={handleChange}
            >
              {listLanguages &&
                listLanguages.map((item, index) => {
                  return (
                    <MenuItem key={item._id} value={item._id}>
                      {item.name}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </div>
        <DashboardRouters />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  const { getListLanguagesAction } = require("redux/adminLanguagesRedux");
  return {
    getListLanguagesAction: (data) => dispatch(getListLanguagesAction(data)),
  };
};

const mapStateToProps = (state) => ({
  listLanguages: state.languageRedux.listLanguages,
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
