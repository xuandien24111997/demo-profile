import React, { useEffect, useState } from "react";
import Classifiers from "./Classifiers";
import home from "../../../assets/images/Home.png";
import left from "../../../assets/images/left.png";
import { connect } from "react-redux";
import history from "ultils/history";

const NumbersClassifieds = ({
  getListNumbersAction,
  listNumbers,
  getListCurrencyUnitAction,
  listCurrencyUnit,
}) => {
  const [open, setOpen] = useState(false);
  const [openIdModal, setOpenIdModal] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState('');

  useEffect(() => {
    getListNumbersAction({
      Keyword: "",
      TotalOrderForOnePage: 100,
      PageNumber: 1,
      IsOrderNewASC: false,
      Language: JSON.parse(localStorage.getItem("clientLanguage")).id || "",
    });
    getListCurrencyUnitAction({
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

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = (id) => {
    setOpenIdModal(id)
    setOpen(true);
  };

  return (
    <div className="currency">
      <div className="link-move container">
        <div className="link-move__left">
          <div className="leftRight">
            <img alt="img" src={home} />
            <p className="Home_text" onClick={() => history.push("/")}>
              {" "}
              Home
            </p>
            <span>\</span>
            <p className="Home_text" onClick={() => history.push("/select-language")}>
              {JSON.parse(localStorage.getItem("clientLanguage")).name || ""}
            </p>
            <span>\</span>
            <p className="Alphabet">Numbers & classifieds</p>
          </div>
        </div>
        <div className="link-move__right" onClick={() => history.goBack()}>
          <img alt="img" src={left} />
          <p> Back to Previous Page</p>
        </div>
      </div>
      <div className="alphabet__more-about">
        <p className="about">{`${selectedLanguage} - NUMBERS`}</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p className="line"></p>
        </div>
      </div>
      {/* LIST ITEM */}

      <div className="currency__list-item">
        {/* <div className="line-number-curency"></div> */}
        <div className="container">
          <div className="list-title">
            <div
              className="list-title__header english "
              style={{ textAlign: "end", width: "25.65%" }}
            >
              <p> Numbers </p>
            </div>
            <div
              className="list-title__header romanisation "
              style={{ width: "47.03%" }}
            >
              <p> Orthography 1 </p>
            </div>
            <div
              className="list-title__header orthography"
              style={{ padding: "18px 20px" }}
            >
              <p> Orthography 2</p>
            </div>
          </div>
          {listNumbers.map((list, index) => {
            return (
              <div className="list-content" key={index}>
                <div
                  className="content-text list-content__english"
                  style={{
                    justifyContent: "flex-end",
                    paddingRight: "34px",
                    width: "26.3%",
                    color: "#344955",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: list.means,
                  }}
                ></div>
                <div
                  className=" content-text list-content__roma"
                  style={{ width: "47.03%" }}
                >
                  <div
                    className="roma-title"
                    dangerouslySetInnerHTML={{
                      __html: list.spelling,
                    }}
                  ></div>
                  <div className="roma-play">
                    <i
                      class="fas fa-play-circle"
                      onClick={() => {
                        const audio = document.getElementById(
                          "audio__oclock__number-" + index
                        );
                        audio.play();
                      }}
                    ></i>
                    <audio
                      id={"audio__oclock__number-" + index}
                      src={"http://" + list.audio.url}
                      controls
                      controlsList="nodownload"
                      style={{ display: "none" }}
                    ></audio>
                  </div>
                </div>
                <div
                  className="content-text list-content__orth"
                  // dangerouslySetInnerHTML={{
                  //   __html: list.word,
                  // }}
                >
                  <p>{list.word}</p>
                  {list.note && list.note.length > 0 && (
                    <i class="fas fa-lightbulb" onClick= {() => handleTooltipOpen(list._id)}></i>
                  )}

                  {openIdModal ===  list._id &&  open && (
                    <>
                      <div className="modal-light">
                        <div className="light-icon">
                          {/* <img
                            src={require("assets/images/icon-num.svg").default}
                            alt="img"
                          /> */}
                        </div>

                        <div className="light-modal">
                          <div
                            className="light-close"
                            onClick={handleTooltipClose}
                          >
                            {/* <img
                              src={
                                require("assets/images/icon-close.png").default
                              }
                              alt="img"
                            /> */}
                          </div>
                          <div className="modal-details">
                            <p className="title">Cultural Notes</p>
                           <div
                              dangerouslySetInnerHTML={{
                                __html: list.note,
                              }}
                           >
                           </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ANOTHER CURRENCY */}

      <div className="currency__apply">
        <div className="container">
          <div className="apply-take">
            <p className="about">CURRENCY UNIT</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p className="line"></p>
            </div>
          </div>
          <div
            className="apply-img"
            style={{
              margin: "0 auto",
              fontSize: "20px",
              marginTop: "60px",
              marginBottom: "124px",
              border: "1px solid #bfccd9",
              padding: "10px",
              borderRadius: "7px",
              maxWidth: "1170px",
            }}
          >
            <div className="list-title">
              <div
                className="list-title__header english "
                style={{
                  backgroundColor: "rgb(191 204 217)",
                  color: "#344955",
                }}
              >
                <p> Phrases in English </p>
              </div>
              <div
                className="list-title__header romanisation "
                style={{
                  backgroundColor: "rgb(191 204 217)",
                  color: "#344955",
                }}
              >
                <p> Orthography 1 </p>
              </div>
              <div
                className="list-title__header orthography "
                style={{
                  backgroundColor: "rgb(191 204 217)",
                  color: "#344955",
                }}
              >
                <p> Orthography 2</p>
              </div>
            </div>
            {listCurrencyUnit.map((list, index) => {
              return (
                <div className="list-content" key={index}>
                  <div
                    className="content-text list-content__english"
                    style={{ paddingRight: "1vw" }}
                    dangerouslySetInnerHTML={{
                      __html: list.means,
                    }}
                  ></div>
                  <div className=" content-text list-content__roma">
                    <div
                      className="roma-title"
                      dangerouslySetInnerHTML={{
                        __html: list.spelling,
                      }}
                    ></div>
                    <div className="roma-play">
                      <i
                        class="fas fa-play-circle"
                        onClick={() => {
                          const audio = document.getElementById(
                            "audio__oclock__1-" + index
                          );
                          audio.play();
                        }}
                      ></i>
                      <audio
                        id={"audio__oclock__1-" + index}
                        src={"http://" + list.audio.url}
                        controls
                        controlsList="nodownload"
                        style={{ display: "none" }}
                      ></audio>
                    </div>
                  </div>
                  <div
                    className="content-text list-content__orth"
                    dangerouslySetInnerHTML={{
                      __html: list.word,
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Classifiers />

      {/* BUTTON BACK TOP */}
      <div className="btn_top col-12">
        <button
          className="btn_top__button"
          type="text"
          onClick={() => window.scrollTo(0, 0)}
        >
          Back to Top
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  const {
    getListNumbersAction,
  } = require("redux/adminNumbersClassifiedsRedux");
  const {
    getListCurrencyUnitAction,
  } = require("redux/adminNumbersClassifiedsRedux");
  return {
    getListNumbersAction: (data) => dispatch(getListNumbersAction(data)),
    getListCurrencyUnitAction: (data) =>
      dispatch(getListCurrencyUnitAction(data)),
  };
};

const mapStateToProps = (state) => ({
  listNumbers: state.numbersClassifieds.listNumbers,
  listCurrencyUnit: state.numbersClassifieds.listCurrencyUnit,
});

export default connect(mapStateToProps, mapDispatchToProps)(NumbersClassifieds);
