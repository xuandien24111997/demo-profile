import React, { useEffect } from "react";
import home from "../../../assets/images/Home.png";
import left from "../../../assets/images/left.png";
import play from "../../../assets/images/play.png";
import { connect } from "react-redux";
import history from "ultils/history";

function TimeLine({ getListTimesAction, listTimes }) {
  useEffect(() => {
    getListTimesAction({
      Keyword: "",
      TotalOrderForOnePage: 100,
      PageNumber: 1,
      IsOrderNewASC: false,
      Language: JSON.parse(localStorage.getItem("clientLanguage")).id || "",
    });
  }, []);
  const listOclock = listTimes.filter((item) => item?.display === 1);
  const listDay = listTimes.filter((item) => item?.display === 3);
  const listNight = listTimes.filter((item) => item?.display === 2);
  return (
    <>
      {/* LINK MOVE */}
      <div className="timeline">
        <div className="link-move container">
          <div className="link-move__left">
            <div className="leftRight">
              <img src={home} alt="home" />
              <p className="Home_text" onClick={() => history.push("/")}>Home</p>
              <span>\</span>
              <p className="Home_text" onClick={() => history.push("/select-language")}>
                {JSON.parse(localStorage.getItem("clientLanguage")).name || ""}
              </p>
              <span>\</span>
              <p className="Cantonese">Time</p>
            </div>
          </div>
          <div className="link-move__right" onClick={() => history.goBack()}>
            <img src={left} alt="left" />
            <p>Back to Previous Page</p>
          </div>
        </div>

        {/* CANTONESE - TIME */}
        <div className="cantonese-time ">
          <div
            className="cantonese-time__title"
            style={{ textTransform: "uppercase" }}
          >
            <h1>
              {" "}
              {JSON.parse(localStorage.getItem("clientLanguage")).name} - TIME
            </h1>
            <div className="boderBottom"></div>
          </div>
          <div className="cantonese-time__body">
            {/* COMPONET1 */}
            {listOclock.length > 0 &&
              listOclock.map((item, index) => (
                <div
                  key={index}
                  className="item-watch"
                  style={
                    index === 12
                      ? { marginLeft: "17.5%" }
                      : index === 13
                      ? { marginRight: "17.5%" }
                      : {}
                  }
                >
                  {/* IMAGE */}
                  <div className="item-watch__img">
                    <img src={item?.image?.url && "http://" + item?.image?.url} />
                  </div>
                  {/* TEXT */}
                  <div className="item-watch__text">
                    <div className="top">
                      <p className="Jat1dim1">{item?.group[0]?.word}</p>
                      <p className="Jat1dim2">{item?.group[0]?.spelling}</p>
                    </div>
                    <div className="middle">
                      <p className="textOclock">{item?.group[0]?.means}</p>
                    </div>
                    <div className="bottom">
                      <i
                        className="fas fa-play-circle"
                        onClick={() => {
                          const audio = document.getElementById(
                            "audio__oclock__1-" + index
                          );
                          audio.play();
                        }}
                      ></i>
                      <audio
                        id={"audio__oclock__1-" + index}
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
          {/* SUN */}
          <div className="sun">
            <div className="img-sun">
              <img
                src={listDay?.length > 0 && "http://" + listDay[0]?.image?.url}
              />
            </div>
            <div className="item-watch">
              {/* COMPONENT 1 */}
              <div className="item-watch__text sunC1">
                <div className="top firstChild">
                  <p className="Jat1dim1">
                    {listDay.length > 0 && listDay[0]?.group[0]?.word}
                  </p>
                  <p className="Jat1dim2">
                    {listDay.length > 0 && listDay[0]?.group[0]?.spelling}
                  </p>
                </div>
                <div className="middle">
                  <p className="textOclock">
                    {listDay.length > 0 && listDay[0]?.group[0]?.means}
                  </p>
                </div>
                <div className="bottom">
                  <img
                    src={play}
                    onClick={() => {
                      const audio = document.getElementById("audio__day__3-1");
                      audio.play();
                    }}
                  />
                  <audio
                    id="audio__day__3-1"
                    src={
                      listDay.length > 0 &&
                      "http://" + listDay[0]?.group[0]?.audio?.url
                    }
                    controls
                    controlsList="nodownload"
                    style={{ display: "none" }}
                  ></audio>
                </div>
              </div>
              {/* COMPONENT 2 */}
              <div className="item-watch__text sunC2">
                <div className="top">
                  <p className="Jat1dim1">
                    {listDay.length > 0 && listDay[0]?.group[1]?.word}
                  </p>
                  <p className="Jat1dim2">
                    {listDay.length > 0 && listDay[0]?.group[1]?.spelling}
                  </p>
                </div>
                <div className="middle">
                  <p className="textOclock">
                    {listDay.length > 0 && listDay[0]?.group[1]?.means}
                  </p>
                </div>
                <div className="bottom">
                  <img
                    src={play}
                    onClick={() => {
                      const audio = document.getElementById("audio__day__3-2");
                      audio.play();
                    }}
                  />
                  <audio
                    id="audio__day__3-2"
                    src={
                      listDay.length > 0 &&
                      "http://" + listDay[0]?.group[1]?.audio?.url
                    }
                    controls
                    controlsList="nodownload"
                    style={{ display: "none" }}
                  ></audio>
                </div>
              </div>
              {/* COMPONENT 3 */}
              <div className="item-watch__text sunC3">
                <div className="top">
                  <p className="Jat1dim1">
                    {listDay.length > 0 && listDay[0]?.group[2]?.word}
                  </p>
                  <p className="Jat1dim2">
                    {listDay.length > 0 && listDay[0]?.group[2]?.spelling}
                  </p>
                </div>
                <div className="middle">
                  <p className="textOclock">
                    {listDay.length > 0 && listDay[0]?.group[2]?.means}
                  </p>
                </div>
                <div className="bottom">
                  <img
                    src={play}
                    onClick={() => {
                      const audio = document.getElementById("audio__day__3-3");
                      audio.play();
                    }}
                  />
                  <audio
                    id="audio__day__3-3"
                    src={
                      listDay.length > 0 &&
                      "http://" + listDay[0]?.group[2]?.audio?.url
                    }
                    controls
                    controlsList="nodownload"
                    style={{ display: "none" }}
                  ></audio>
                </div>
              </div>
            </div>
          </div>

          {/* Night      */}
          <div className="sun">
            <div className="img-sun" style={{ height: "23.958vw" }}>
              <img
                src={listNight.length > 0 && "http://" + listNight[0].image?.url}
              />
            </div>
            <div className="item-watch">
              {/* COMPONENT 1 */}
              <div
                className="item-watch__text"
                style={{ paddingLeft: "0.781vw" }}
              >
                <div className="top">
                  <p className="Jat1dim1">
                    {listNight.length > 0 && listNight[0].group[0]?.word}
                  </p>
                  <p className="Jat1dim2">
                    {listNight.length > 0 && listNight[0].group[0]?.spelling}
                  </p>
                </div>
                <div className="middle">
                  <p className="textOclock">
                    {listNight.length > 0 && listNight[0].group[0]?.means}
                  </p>
                </div>
                <div className="bottom">
                  <img
                    src={play}
                    onClick={() => {
                      const audio = document.getElementById("audio__night__1");
                      audio.play();
                    }}
                  />
                  <audio
                    id="audio__night__1"
                    src={
                      listNight.length > 0 &&
                      "http://" + listNight[0].group[0]?.audio?.url
                    }
                    controls
                    controlsList="nodownload"
                    style={{ display: "none" }}
                  ></audio>
                </div>
              </div>
              {/* COMPONENT 2 */}
              <div
                className="item-watch__text"
                style={{ paddingLeft: "5.73vw" }}
              >
                <div className="top">
                  <p className="Jat1dim1">
                    {listNight.length > 0 && listNight[0].group[1]?.word}
                  </p>
                  <p className="Jat1dim2">
                    {listNight.length > 0 && listNight[0].group[1]?.spelling}
                  </p>
                </div>
                <div className="middle">
                  <p className="textOclock">
                    {listNight.length > 0 && listNight[0].group[1]?.means}
                  </p>
                </div>
                <div className="bottom">
                  <img
                    src={play}
                    onClick={() => {
                      const audio = document.getElementById("audio__night__2");
                      audio.play();
                    }}
                  />
                  <audio
                    id="audio__night__2"
                    src={
                      listNight.length > 0 &&
                      "http://" + listNight[0].group[1]?.audio?.url
                    }
                    controls
                    controlsList="nodownload"
                    style={{ display: "none" }}
                  ></audio>
                </div>
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
  const { getListTimesAction } = require("redux/adminTimeRedux");
  return {
    getListTimesAction: (data) => dispatch(getListTimesAction(data)),
  };
};

const mapStateToProps = (state) => ({
  listTimes: state.timeRedux.listTimes,
});
export default connect(mapStateToProps, mapDispatchToProps)(TimeLine);
