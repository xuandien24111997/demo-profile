import React, { useEffect, useState } from "react";
import history from "ultils/history";
import home from "../../../assets/images/Home.png";
import left from "../../../assets/images/left.png";
import play from "../../../assets/images/play.png";
import { connect } from "react-redux";

function Alphabets({
  getListAlphabetAction,
  listAlphabets,
  listAboutAlphabets,
  getListAboutAlphabetAction,
}) {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  useEffect(() => {
    getListAlphabetAction({
      IsOrderNewASC: false,
      Keyword: "",
      Language: JSON.parse(localStorage.getItem("clientLanguage")).id || "",
      PageNumber: 1,
      TotalOrderForOnePage: 26,
    });
  }, []);
  useEffect(() => {
    getListAboutAlphabetAction({
      IsOrderNewASC: false,
      Keyword: "",
      Language: JSON.parse(localStorage.getItem("clientLanguage")).id || "",
      PageNumber: 1,
      TotalOrderForOnePage: 10,
    });
    setSelectedLanguage(
      (JSON.parse(localStorage.getItem("clientLanguage")).name || "").toUpperCase()
    );
  }, []);

  const array1 = listAlphabets.slice(0, 7);
  const array2 = listAlphabets.slice(7, 14);
  const array3 = listAlphabets.slice(14, 21);
  const array4 = listAlphabets.slice(21, 27);

  return (
    <div className="alphabet">
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
            <p className="Alphabet">Alphabet</p>
          </div>
        </div>
        <div className="link-move__right" onClick={() => history.goBack()}>
          <img alt="img" src={left} />
          <p> Back to Previous Page</p>
        </div>
      </div>
      <div className="alphabet__more-about">
        <p className="about">{`${selectedLanguage} - ALPHABET`}</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p className="line"></p>
        </div>
      </div>
      <div className="alphabet__text">
        <div className="container">
          <div className="text-center">
            <p className="text-top">
              English alphabets as pronounced by Cantonese speakers.
            </p>
            <p className="text-bottom">
              in Hong Kong, the pronunciation of the English alphabets may sound
              slightly different with a touch of the local accent. Click the
              play butons below to listen to their differences.
            </p>
          </div>
        </div>
      </div>
      <div className="alphabet__letter">
        <div className="container">
          <div className="letter-row">
            <div className="col-10">
              <div className="list-letter ">
                {array1.map((array1, index) => {
                  return (
                    <div className="letter">
                      <p className="letter__text">{array1.word}</p>
                      <div className="letter__img">
                        <i
                          className="fas fa-play-circle"
                          onClick={() => {
                            const audio = document.getElementById(
                              "audio__alphabet" + index
                            );
                            audio.play();
                          }}
                        ></i>
                        <audio
                          id={"audio__alphabet" + index}
                          src={"http://" + array1.audio.url}
                          controls
                          controlsList="nodownload"
                          style={{ display: "none" }}
                        ></audio>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className=" letter-right col-2">
              <div className="list-letter-right ">
                <p className="letter-right">
                  Repeat{" "}
                  {listAboutAlphabets &&
                    listAboutAlphabets[0] &&
                    listAboutAlphabets[0].word}
                </p>
                <div className="play-icon">
                  <img
                    className="play-img"
                    alt="img-play"
                    src={play}
                    onClick={() => {
                      const audio = document.getElementById(
                        `"audio__alphabet0" +  ${
                          listAboutAlphabets &&
                          listAboutAlphabets[0] &&
                          listAboutAlphabets[0].word
                        }`
                      );
                      audio.play();
                    }}
                  />

                  <audio
                    id={`"audio__alphabet0" +  ${
                      listAboutAlphabets &&
                      listAboutAlphabets[0] &&
                      listAboutAlphabets[0].word
                    }`}
                    src={
                      "http://" +
                      `${
                        listAboutAlphabets &&
                        listAboutAlphabets[0] &&
                        listAboutAlphabets[0].audio.url
                      }`
                    }
                    controls
                    controlsList="nodownload"
                    style={{ display: "none" }}
                  ></audio>
                </div>
              </div>
            </div>
          </div>
          <div className="letter-row">
            <div className="col-10">
              <div className="list-letter ">
                {array2.map((array2, index) => {
                  return (
                    <div className="letter">
                      <p className="letter__text">{array2.word}</p>
                      <div className="letter__img">
                        <i
                          className="fas fa-play-circle"
                          onClick={() => {
                            const audio = document.getElementById(
                              "audio__alphabet1" + index
                            );
                            audio.play();
                          }}
                        ></i>
                        <audio
                          id={"audio__alphabet1" + index}
                          src={"http://" + array2.audio.url}
                          controls
                          controlsList="nodownload"
                          style={{ display: "none" }}
                        ></audio>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className=" letter-right col-2">
              <div className="list-letter-right ">
                <p className="letter-right">
                  Repeat{" "}
                  {listAboutAlphabets &&
                    listAboutAlphabets[1] &&
                    listAboutAlphabets[1].word}
                </p>
                <div className="play-icon">
                  <img
                    className="play-img"
                    alt="img-play"
                    src={play}
                    onClick={() => {
                      const audio = document.getElementById(
                        `"audio__alphabet9" +  ${
                          listAboutAlphabets &&
                          listAboutAlphabets[1] &&
                          listAboutAlphabets[1].word
                        }`
                      );
                      audio.play();
                    }}
                  />

                  <audio
                    id={`"audio__alphabet9" +  ${
                      listAboutAlphabets &&
                      listAboutAlphabets[1] &&
                      listAboutAlphabets[1].word
                    }`}
                    src={
                      "http://" +
                      `${
                        listAboutAlphabets &&
                        listAboutAlphabets[1] &&
                        listAboutAlphabets[1].audio.url
                      }`
                    }
                    controls
                    controlsList="nodownload"
                    style={{ display: "none" }}
                  ></audio>
                </div>
              </div>
            </div>
          </div>
          <div className="letter-row">
            <div className="col-10">
              <div className="list-letter ">
                {array3.map((array3, index) => {
                  return (
                    <div className="letter">
                      <p className="letter__text">{array3.word}</p>
                      <div className="letter__img">
                        <i
                          className="fas fa-play-circle"
                          onClick={() => {
                            const audio = document.getElementById(
                              "audio__alphabet2" + index
                            );
                            audio.play();
                          }}
                        ></i>
                        <audio
                          id={"audio__alphabet2" + index}
                          src={"http://" + array3.audio.url}
                          controls
                          controlsList="nodownload"
                          style={{ display: "none" }}
                        ></audio>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className=" letter-right col-2">
              <div className="list-letter-right ">
                <p className="letter-right">
                  Repeat{" "}
                  {listAboutAlphabets &&
                    listAboutAlphabets[2] &&
                    listAboutAlphabets[2].word}
                </p>
                <div className="play-icon">
                  <img
                    className="play-img"
                    alt="img-play"
                    src={play}
                    onClick={() => {
                      const audio = document.getElementById(
                        `"audio__alphabet8" +  ${
                          listAboutAlphabets &&
                          listAboutAlphabets[2] &&
                          listAboutAlphabets[2].word
                        }`
                      );
                      audio.play();
                    }}
                  />

                  <audio
                    id={`"audio__alphabet8" +  ${
                      listAboutAlphabets &&
                      listAboutAlphabets[2] &&
                      listAboutAlphabets[2].word
                    }`}
                    src={
                      "http://" +
                      `${
                        listAboutAlphabets &&
                        listAboutAlphabets[2] &&
                        listAboutAlphabets[2].audio.url
                      }`
                    }
                    controls
                    controlsList="nodownload"
                    style={{ display: "none" }}
                  ></audio>
                </div>
              </div>
            </div>
          </div>
          <div className="letter-row">
            <div className="col-10">
              <div className="list-letter ">
                {array4.map((array4, index) => {
                  return (
                    <div className="letter">
                      <p className="letter__text">{array4.word}</p>
                      <div className="letter__img">
                        <i
                          className="fas fa-play-circle"
                          onClick={() => {
                            const audio = document.getElementById(
                              "audio__alphabet3" + index
                            );
                            audio.play();
                          }}
                        ></i>
                        <audio
                          id={"audio__alphabet3" + index}
                          src={"http://" + array4.audio.url}
                          controls
                          controlsList="nodownload"
                          style={{ display: "none" }}
                        ></audio>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className=" letter-right col-2">
              <div className="list-letter-right ">
                <p className="letter-right">
                  Repeat{" "}
                  {listAboutAlphabets &&
                    listAboutAlphabets[3] &&
                    listAboutAlphabets[3].word}
                </p>
                <div className="play-icon">
                  <img
                    className="play-img"
                    alt="img-play"
                    src={play}
                    onClick={() => {
                      const audio = document.getElementById(
                        `"audio__alphabet7" +  ${
                          listAboutAlphabets &&
                          listAboutAlphabets[3] &&
                          listAboutAlphabets[3].word
                        }`
                      );
                      audio.play();
                    }}
                  />

                  <audio
                    id={`"audio__alphabet7" +  ${
                      listAboutAlphabets &&
                      listAboutAlphabets[3] &&
                      listAboutAlphabets[3].word
                    }`}
                    src={
                      "http://" +
                      `${
                        listAboutAlphabets &&
                        listAboutAlphabets[3] &&
                        listAboutAlphabets[3].audio.url
                      }`
                    }
                    controls
                    controlsList="nodownload"
                    style={{ display: "none" }}
                  ></audio>
                </div>
              </div>
            </div>
          </div>
          <div className="letter-row">
            <div className="col-10">
              <div className="list-letter ">
                <div className="letter">
                  <p className="letter__text"></p>
                  <div className="letter__img"></div>
                </div>
              </div>
            </div>
            <div className=" letter-right col-2">
              <div className="list-letter-right " style={{ marginTop: "-8px" }}>
                <p className="letter-right">
                  Repeat{" "}
                  {listAboutAlphabets &&
                    listAboutAlphabets[4] &&
                    listAboutAlphabets[4].word}
                </p>
                <div className="play-icon">
                  <img
                    className="play-img"
                    alt="img-play"
                    src={play}
                    onClick={() => {
                      const audio = document.getElementById(
                        `"audio__alphabet6" +  ${
                          listAboutAlphabets &&
                          listAboutAlphabets[4] &&
                          listAboutAlphabets[4].word
                        }`
                      );
                      audio.play();
                    }}
                  />

                  <audio
                    id={`"audio__alphabet6" +  ${
                      listAboutAlphabets &&
                      listAboutAlphabets[4] &&
                      listAboutAlphabets[4].word
                    }`}
                    src={
                      "http://" +
                      `${
                        listAboutAlphabets &&
                        listAboutAlphabets[4] &&
                        listAboutAlphabets[4].audio.url
                      }`
                    }
                    controls
                    controlsList="nodownload"
                    style={{ display: "none" }}
                  ></audio>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* bottom */}
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
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  const {
    getListAlphabetAction,
    getListAboutAlphabetAction,
  } = require("redux/adminAlphabetRedux");
  return {
    getListAlphabetAction: (data) => dispatch(getListAlphabetAction(data)),
    getListAboutAlphabetAction: (data) =>
      dispatch(getListAboutAlphabetAction(data)),
  };
};

const mapStateToProps = (state) => ({
  listAlphabets: state.alphabetRedux.listAlphabets,
  listAboutAlphabets: state.aboutAlphabetRedux.listAboutAlphabets,
});

export default connect(mapStateToProps, mapDispatchToProps)(Alphabets);
