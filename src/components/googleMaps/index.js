import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import styles from "./mapStyles";
import AnyReactComponent from "./AnyReactComponent";
import IconClose1 from "assets/images/close.png";
import Down from "assets/images/down.svg";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CircularProgress from "@material-ui/core/CircularProgress";
import history from "ultils/history";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SimpleMap = ({ listLanguages, getListLanguagesAction, getListCountry, getCountry, listCountry, detailCountry, loading }) => {
  const classes = useStyles();
  const [isShowSelectLanguage, setIsShowSelectLanguage] = useState(false);

  useEffect(() => {
    let data = {
      Keyword: "",
      TotalOrderForOnePage: 20,
      PageNumber: 1,
      IsOrderNewASC: true,
    };
    getListLanguagesAction(data);
  }, []);

  useEffect(() => {
    getListCountry()
  }, [])

  const onDetailClick = (id) => {
    getCountry(id)
  }

  const onSelectLanguage = (data) => {
    localStorage.setItem("clientLanguage", JSON.stringify(data));
    history.push("/more-about");
  };

  if (loading) return <div className="loading">{loading && <CircularProgress />}</div>

  return (
    <div className="google-map">
      {detailCountry.name && (
        <div className="google-map__select">
          <div className="select-wrap">
            <Accordion expanded={isShowSelectLanguage}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  <button
                    className="btn cus-btn-title active"
                    onClick={() => setIsShowSelectLanguage(!isShowSelectLanguage)}
                  >
                    {detailCountry.name}
                    <img src={isShowSelectLanguage ? IconClose1 : Down} alt="icon" />
                  </button>
                </Typography>
              </AccordionSummary>
              {detailCountry.lang.map((item, index) => {
                return (
                  <AccordionDetails
                    key={index}
                    onClick={() =>
                      onSelectLanguage({
                        id: item._id,
                        name: item.name,
                      })
                    }>
                    <button className="btn cus-btn">
                      {item.name}
                    </button>
                  </AccordionDetails>
                );
              })}
            </Accordion>
          </div>
        </div>
      )}
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyD6HsdhhNlPDf9fHWGyylrKev4Y4HjnFnM",
        }}
        defaultCenter={{
          lat: 22.302711,
          lng: 114.177216,
        }}
        defaultZoom={2}
      >
        {listCountry.map((eq, index) => <AnyReactComponent onClick={() => onDetailClick(eq._id)} key={index} lat={eq.lat} lng={eq.lng} />)}
      </GoogleMapReact>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  const { getListLanguagesAction } = require("redux/adminLanguagesRedux");
  const { getListCountryAction, getCountryAction } = require("redux/adminCountryRedux");
  return {
    getListLanguagesAction: (data) => dispatch(getListLanguagesAction(data)),
    getListCountry: (payload) => dispatch(getListCountryAction(payload)),
    getCountry: (id) => dispatch(getCountryAction(id)),
  };
};

const mapStateToProps = (state) => ({
  listLanguages: state.languageRedux.listLanguages,
  listCountry: state.country.list,
  detailCountry: state.country.detail,
  loading: state.country.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleMap);
