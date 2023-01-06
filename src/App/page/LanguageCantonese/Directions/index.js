import React, { useEffect, useRef, useState } from "react";
import home from "../../../../assets/images/Home.png";
import left from "../../../../assets/images/left.png";
import { connect } from "react-redux";
import history from "ultils/history";

function Directions({ getListDirectionsAction, listDirections }) {
  useEffect(() => {
    getListDirectionsAction({
      Keyword: "",
      TotalOrderForOnePage: 100,
      PageNumber: 1,
      IsOrderNewASC: false,
      Language: JSON.parse(localStorage.getItem("clientLanguage")).id || "",
    });
  }, []);
  const directionsDisplay4 = listDirections.filter(
    (item) => item.display === 4
  );
  const directionsDisplay2 = listDirections.filter(
    (item) => item.display === 2
  );
  const directionsDisplay1 = listDirections.filter(
    (item) => item.display === 1
  );
  return (
    <div className="directions">
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
            <p className="Cantonese">Directions</p>
          </div>
        </div>
        <div className="link-move__right" onClick={() => history.goBack()}>
          <img alt="img" src={left} />
          <p> Back to Previous Page</p>
        </div>
      </div>
      <div className="directions__more-about">
        <p className="about" style={{ textTransform: "uppercase" }}>
          {JSON.parse(localStorage.getItem("clientLanguage")).name} - DIRECTIONS
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p className="line"></p>
        </div>
      </div>
      {directionsDisplay4.length > 0 && (
        <div className="directions__compass">
          <div>
            <div className="text-div">
              <div className="top">
                <p className="Jat1dim1">
                  {directionsDisplay4.length > 0 &&
                    directionsDisplay4[0]?.group[0]?.word}
                </p>
                <p className="Jat1dim2">
                  {directionsDisplay4.length > 0 &&
                    directionsDisplay4[0]?.group[0]?.spelling}
                </p>
              </div>
              <div className="middle">
                <p className="text-p">
                  {directionsDisplay4.length > 0 &&
                    directionsDisplay4[0]?.group[0]?.means}
                </p>
              </div>
              <div className="bottom">
                <i
                  className="fas fa-play-circle"
                  onClick={() => {
                    const audio = document.getElementById("audio__compasss-0");
                    audio.play();
                  }}
                ></i>
                <audio
                  id="audio__compasss-0"
                  src={
                    directionsDisplay4.length > 0 &&
                    "http://" + directionsDisplay4[0]?.group[0]?.audio?.url
                  }
                  controls
                  controlsList="nodownload"
                  style={{ display: "none" }}
                ></audio>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "22px",
              }}
            >
              <div className="text-div" style={{ margin: "35px 6px 0 0" }}>
                <div className="top">
                  <p className="Jat1dim1">
                    {directionsDisplay4.length > 0 &&
                      directionsDisplay4[0]?.group[3]?.word}
                  </p>
                  <p className="Jat1dim2">
                    {directionsDisplay4.length > 0 &&
                      directionsDisplay4[0]?.group[3]?.spelling}
                  </p>
                </div>
                <div className="middle">
                  <p className="text-p">
                    {directionsDisplay4.length > 0 &&
                      directionsDisplay4[0]?.group[3]?.means}
                  </p>
                </div>
                <div className="bottom">
                  <i
                    className="fas fa-play-circle"
                    onClick={() => {
                      const audio =
                        document.getElementById("audio__compasss-3");
                      audio.play();
                    }}
                  ></i>
                  <audio
                    id="audio__compasss-3"
                    src={
                      directionsDisplay4.length > 0 &&
                      "http://" + directionsDisplay4[0]?.group[3]?.audio?.url
                    }
                    controls
                    controlsList="nodownload"
                    style={{ display: "none" }}
                  ></audio>
                </div>
              </div>
              <div>
                <img
                  className="compass-img"
                  alt="img"
                  src={`http://${
                    directionsDisplay4.length > 0 &&
                    directionsDisplay4[0]?.image?.url
                  }`}
                />
              </div>
              <div className="text-div" style={{ margin: "35px 0 0 0" }}>
                <div className="top">
                  <p className="Jat1dim1">
                    {directionsDisplay4.length > 0 &&
                      directionsDisplay4[0]?.group[1]?.word}
                  </p>
                  <p className="Jat1dim2">
                    {directionsDisplay4.length > 0 &&
                      directionsDisplay4[0]?.group[1]?.spelling}
                  </p>
                </div>
                <div className="middle">
                  <p className="text-p">
                    {directionsDisplay4.length > 0 &&
                      directionsDisplay4[0]?.group[1]?.means}
                  </p>
                </div>
                <div className="bottom">
                  <i
                    className="fas fa-play-circle"
                    onClick={() => {
                      const audio =
                        document.getElementById("audio__compasss-1");
                      audio.play();
                    }}
                  ></i>
                  <audio
                    id="audio__compasss-1"
                    src={
                      directionsDisplay4?.length > 0 &&
                      "http://" + directionsDisplay4[0]?.group[1]?.audio?.url
                    }
                    controls
                    controlsList="nodownload"
                    style={{ display: "none" }}
                  ></audio>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "-22px",
              }}
            >
              <div className="text-div">
                <div className="top">
                  <p className="Jat1dim1">
                    {directionsDisplay4.length > 0 &&
                      directionsDisplay4[0]?.group[2]?.word}
                  </p>
                  <p className="Jat1dim2">
                    {directionsDisplay4.length > 0 &&
                      directionsDisplay4[0]?.group[2]?.spelling}
                  </p>
                </div>
                <div className="middle">
                  <p className="text-p">
                    {directionsDisplay4.length > 0 &&
                      directionsDisplay4[0]?.group[2]?.means}
                  </p>
                </div>
                <div className="bottom">
                  <i
                    className="fas fa-play-circle"
                    onClick={() => {
                      const audio =
                        document.getElementById("audio__compasss-2");
                      audio.play();
                    }}
                  ></i>
                  <audio
                    id="audio__compasss-2"
                    src={
                      directionsDisplay4.length > 0 &&
                      "http://" + directionsDisplay4[0]?.group[2]?.audio.url
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
      )}
      {directionsDisplay2.length > 0 && (
        <div className="directions__content directions__compass">
          <div className="content-left">
            <div className="text-div left-top" style={{ marginRight: "55px" }}>
              <div className="top">
                <p className="Jat1dim1">
                  {directionsDisplay2.length > 0 &&
                    directionsDisplay2[0]?.group[0]?.word}
                </p>
                <p className="Jat1dim2">
                  {directionsDisplay2.length > 0 &&
                    directionsDisplay2[0]?.group[0]?.spelling}
                </p>
              </div>
              <div className="middle">
                <p className="text-p">
                  {directionsDisplay2.length > 0 &&
                    directionsDisplay2[0]?.group[0]?.means}
                </p>
              </div>
              <div className="bottom">
                <span>
                  <i
                    className="fas fa-play-circle"
                    onClick={() => {
                      const audio = document.getElementById(
                        "audio__display__2-0"
                      );
                      audio.play();
                    }}
                  ></i>
                  <audio
                    id="audio__display__2-0"
                    src={
                      directionsDisplay2.length > 0 &&
                      "http://" + directionsDisplay2[0]?.group[0]?.audio?.url
                    }
                    controls
                    controlsList="nodownload"
                    style={{ display: "none" }}
                  ></audio>
                </span>
              </div>
            </div>
            <div className="img-robot">
              <img
                alt="img"
                src={
                  directionsDisplay2.length > 0 &&
                  "http://" + directionsDisplay2[0]?.image?.url
                }
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="left-bottom">
              <div className="text-div" style={{ marginRight: "53px" }}>
                <div className="top">
                  <p className="Jat1dim1">
                    {directionsDisplay2.length > 0 &&
                      directionsDisplay2[0]?.group[1]?.word}
                  </p>
                  <p className="Jat1dim2">
                    {directionsDisplay2.length > 0 &&
                      directionsDisplay2[0]?.group[1]?.spelling}
                  </p>
                </div>
                <div className="middle">
                  <p className="text-p">
                    {directionsDisplay2.length > 0 &&
                      directionsDisplay2[0]?.group[1]?.means}
                  </p>
                </div>
                <div className="bottom">
                  <i
                    className="fas fa-play-circle"
                    onClick={() => {
                      const audio = document.getElementById(
                        "audio__display__2-1"
                      );
                      audio.play();
                    }}
                  ></i>
                  <audio
                    id="audio__display__2-1"
                    src={
                      directionsDisplay2.length > 0 &&
                      "http://" + directionsDisplay2[0]?.group[1]?.audio?.url
                    }
                    controls
                    controlsList="nodownload"
                    style={{ display: "none" }}
                  ></audio>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content__img-div">
              <div className="content-text-left">
                <div className="text-div">
                  <div className="top">
                    <p className="Jat1dim1">
                      {directionsDisplay2.length > 0 &&
                        directionsDisplay2[1]?.group[0]?.word}
                    </p>
                    <p className="Jat1dim2">
                      {directionsDisplay2.length > 0 &&
                        directionsDisplay2[1]?.group[0]?.spelling}
                    </p>
                  </div>
                  <div className="middle">
                    <p className="text-p">
                      {directionsDisplay2.length > 0 &&
                        directionsDisplay2[1]?.group[0]?.means}
                    </p>
                  </div>
                  <div className="bottom">
                    <i
                      className="fas fa-play-circle"
                      onClick={() => {
                        const audio = document.getElementById(
                          "audio__display__2-3"
                        );
                        audio.play();
                      }}
                    ></i>
                    <audio
                      id="audio__display__2-3"
                      src={
                        directionsDisplay2.length > 0 &&
                        "http://" + directionsDisplay2[1]?.group[0]?.audio?.url
                      }
                      controls
                      controlsList="nodownload"
                      style={{ display: "none" }}
                    ></audio>
                  </div>
                </div>
              </div>
              <img
                alt="img"
                className="div-content-img"
                src={
                  directionsDisplay2.length > 0 &&
                  "http://" + directionsDisplay2[1]?.image?.url
                }
              />
              <div className="content-text-right">
                <div className="text-div" style={{ width: "135%" }}>
                  <div className="top">
                    <p className="Jat1dim1">
                      {directionsDisplay2.length > 0 &&
                        directionsDisplay2[1]?.group[1]?.word}
                    </p>
                    <p className="Jat1dim2">
                      {directionsDisplay2.length > 0 &&
                        directionsDisplay2[1]?.group[1]?.spelling}
                    </p>
                  </div>
                  <div className="middle">
                    <p className="text-p">
                      {directionsDisplay2.length > 0 &&
                        directionsDisplay2[1]?.group[1]?.means}
                    </p>
                  </div>
                  <div className="bottom">
                    <i
                      className="fas fa-play-circle"
                      onClick={() => {
                        const audio = document.getElementById(
                          "audio__display__2-4"
                        );
                        audio.play();
                      }}
                    ></i>
                    <audio
                      id="audio__display__2-4"
                      src={
                        directionsDisplay2.length > 0 &&
                        "http://" + directionsDisplay2[1]?.group[1]?.audio.url
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
        </div>
      )}
      <div className="directions__list ">
        <div className="container">
          <div className="row">
            <div className="list-img">
              {/* COMPONET1 */}
              {directionsDisplay1.length > 0 &&
                directionsDisplay1.map((item, index) => (
                  <div className="text-div div-list__array">
                    {/* IMAGE */}
                    <div className="text-div__img">
                      <img alt="img" src={"http://" + item?.image?.url} />
                    </div>
                    {/* TEXT */}
                    <div className="text-div__text">
                      <div className="top">
                        <p className="Jat1dim1">{item?.group[0]?.word}</p>
                        <p className="Jat1dim2">{item?.group[0]?.spelling}</p>
                      </div>
                      <div className="middle">
                        <p>{item?.group[0]?.means}</p>
                      </div>
                      <div className="bottom">
                        <i
                          className="fas fa-play-circle"
                          onClick={() => {
                            const audio = document.getElementById(
                              "audio__display__1-" + index
                            );
                            audio.play();
                          }}
                        ></i>
                        <audio
                          id={"audio__display__1-" + index}
                          src={"http://" + item?.group[0]?.audio?.url}
                          controls
                          controlsList="nodownload"
                          style={{ display: "none" }}
                        ></audio>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
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
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  const {
    getListDirectionsAction,
  } = require("redux/clients/directionsClientRedux");
  return {
    getListDirectionsAction: (data) => dispatch(getListDirectionsAction(data)),
  };
};

const mapStateToProps = (state) => ({
  listDirections: state.directionsClientRedux.listDirections,
});

export default connect(mapStateToProps, mapDispatchToProps)(Directions);
