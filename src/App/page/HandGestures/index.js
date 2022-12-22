import React, { useEffect, useState } from "react";
import home from "../../../assets/images/Home.png";
import left from "../../../assets/images/left.png";
import { connect } from "react-redux";
import history from "ultils/history";

function HandGestures({ listHand, getListHandAction }) {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  useEffect(() => {
    getListHandAction({
      Keyword: "",
      TotalOrderForOnePage: 100,
      PageNumber: 1,
      IsOrderNewASC: false,
      Language: JSON.parse(localStorage.getItem("clientLanguage")).id || "",
    });
    setSelectedLanguage(
      (
        JSON.parse(localStorage.getItem("clientLanguage")).name || ""
      ).toUpperCase()
    );
  }, []);
  return (
    <>
      {/* LINK MOVE */}
      <div className="alphabet">
        <div className="link-move container">
          <div className="link-move__left">
            <div className="leftRight">
              <img src={home} />
              <p className="Home_text" onClick={() => history.push("/")}>
                Home
              </p>
              <span>\</span>
              <p className="Home_text" onClick={() => history.push("/select-language")}>
                {JSON.parse(localStorage.getItem("clientLanguage")).name || ""}
              </p>
              <span>\</span>
              <p className="Alphabet">Hand Gestures</p>
            </div>
          </div>
          <div className="link-move__right" onClick={() => history.goBack()}>
            <img src={left} />
            <p>Back to Previous Page</p>
          </div>
        </div>

        {/* FINGER COUNTING */}
        <div className="hand-gestures">
          <div className="hand-gestures__title">
            <h1>{`${selectedLanguage} - HAND GESTURES`}</h1>
            <div className="boderBottom"></div>
          </div>
          <div className="hand-gestures__body">
            {listHand.length > 0 &&
              listHand.map((item, index) => (
                <div
                  className="d-flex wrapper"
                  style={{ marginBottom: "87px" }}
                  key={index}
                >
                  <div className="body__img">
                    <img src={"http://" + item.image.url} alt="" />
                  </div>
                  <div className="body__content">
                    <div className="title">{item.title}</div>
                    <div className="how-to-use">How to use ?</div>
                    <div className="content">
                      {item.question.split("\n").map((word, index) => {
                        if (word === "") return <br />;
                        else return <p>{word}</p>;
                      })}
                      {item.note !== "" && (
                        <>
                          <div className="notes">Notes :</div>
                          <div className="notes__content">
                            Mostly used during celebrations, such as Chinese New
                            Year and weddings.
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
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
  const { getListHandAction } = require("redux/adminHandGesturesRedux");
  return {
    getListHandAction: (data) => dispatch(getListHandAction(data)),
  };
};

const mapStateToProps = (state) => ({
  listHand: state.handGestures.listHand,
});

export default connect(mapStateToProps, mapDispatchToProps)(HandGestures);
