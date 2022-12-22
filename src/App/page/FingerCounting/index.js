import React, { useEffect, useState } from "react";
import home from "../../../assets/images/Home.png";
import left from "../../../assets/images/left.png";
import { connect } from "react-redux";
import history from "ultils/history";

function FingerCounting({ getlistFingerCountingsAction, listFingerCountings }) {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  useEffect(() => {
    getlistFingerCountingsAction({
      Keyword: "",
      TotalOrderForOnePage: 100,
      PageNumber: 1,
      IsOrderNewASC: false,
      Language: JSON.parse(localStorage.getItem("clientLanguage")).id || "",
    });
    setSelectedLanguage(
      (JSON.parse(localStorage.getItem("clientLanguage")).name || "").toUpperCase()
    );
  }, []);
  const listFingerCountingsCol1 = listFingerCountings.slice(0, 5);
  const listFingerCountingsCol2 = listFingerCountings.slice(5, 10);
  return (
    <>
      {/* LINK MOVE */}
      <div className="alphabet">
        <div className="link-move container">
          <div className="link-move__left">
            <div className="leftRight">
              <img src={home} />
              <p className="Home_text" onClick={() => history.push("/")}>Home</p>
              <span>\</span>
              <p className="Home_text" onClick={() => history.push("/select-language")}>
                {JSON.parse(localStorage.getItem("clientLanguage")).name || ""}
              </p>
              <span>\</span>
              <p className="Alphabet">Finger Counting</p>
            </div>
          </div>
          <div className="link-move__right" onClick={() => history.goBack()}>
            <img src={left} />
            <p>Back to Previous Page</p>
          </div>
        </div>

        {/* FINGER COUNTING */}
        <div className="finger-counting">
          <div className="finger-counting__title">
            <h1>{`${selectedLanguage} - FINGER COUNTING`}</h1>
            <div className="boderBottom"></div>
          </div>
          <div className="finger-counting__body">
            <div
              className="body-mid d-flex "
              style={{ justifyContent: "space-between" }}
            >
              <div className="mid-counting" style={{ width: "49%" }}>
                {listFingerCountingsCol1.length > 0 &&
                  listFingerCountingsCol1.map((item, index) => (
                    <div className=" row-counting" key={index}>
                      <div className="col-12 col-counting">
                        <div className="number">{item.number}</div>
                        <div className="image-counting">
                          <img
                            src={"http://" + item.image[0].url}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="mid-counting" style={{ width: "49%" }}>
                {listFingerCountingsCol2.length > 0 &&
                  listFingerCountingsCol2.map((item, index) => (
                    <div className=" row-counting" key={index}>
                      <div className="col-12 col-counting">
                        {item.number === 10 ? (
                          <div
                            className="number"
                            style={{ paddingLeft: "82px" }}
                          >
                            {item.number}
                          </div>
                        ) : (
                          <div className="number">{item.number}</div>
                        )}
                        <div className="image-counting">
                          {item.image.length > 1 ? (
                            <img
                              src={"http://" + item.image[0].url}
                              alt=""
                              className="img-fluid"
                              style={{ marginRight: "-8px" }}
                            />
                          ) : (
                            <img
                              src={"http://" + item.image[0].url}
                              alt=""
                              className="img-fluid"
                            />
                          )}
                          {item.image.length > 1 && (
                            <img
                              src={"http://" + item.image[1].url}
                              alt=""
                              className="img-fluid"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {/* BUTTON */}
          <div className="btn_top">
            <button
              style={{ color: "#232f34" }}
              className="btn_top__button"
              type="text"
              onClick={() => window.scrollTo(0, 0)}
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  const {
    getlistFingerCountingsAction,
  } = require("redux/adminFingerCountingRedux");
  return {
    getlistFingerCountingsAction: (data) =>
      dispatch(getlistFingerCountingsAction(data)),
  };
};

const mapStateToProps = (state) => ({
  listFingerCountings: state.fingerCounting.listFingerCountings,
});

export default connect(mapStateToProps, mapDispatchToProps)(FingerCounting);
