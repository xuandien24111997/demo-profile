import React from "react";
import home from "../../../assets/images/Home.png";
import left from "../../../assets/images/left.png";
import icon from "../../../assets/images/icon.png";
import Layout1 from "../../../assets/images/Layer505.png";
import history from "ultils/history";

export default function index() {
  const array = [
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing." },
    { text: "Maecenas pharetra ligula quis sapien elementum." },
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing." },
    { text: "Maecenas pharetra ligula quis sapien elementum." },
    { text: "Maecenas pharetra ligula quis sapien elementum." },
  ];
  return (
    <div className="page-acknowledgement">
      <div className="acknowledgement">
        <div className="acknowledgement-div"></div>
        <div className="link-move container">
          <div className="link-move__left">
            <div className="leftRight">
              <img alt="img" src={home} />
              <p className="Home_text" onClick={() => history.push("/")}>
                {" "}
                Home
              </p>
              <span>\</span>
              <p className="Alphabet"> Acknowledgement</p>
            </div>
          </div>
          <div className="link-move__right" onClick={() => history.goBack()}>
            <img alt="img" src={left} />
            <p> Back to Previous Page</p>
          </div>
        </div>
      </div>
      <div className="page-acknowledgement__more-about">
        <div className="container">
          <div className="about-content">
            <p className="about">Acknowledgement</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p className="line"></p>
            </div>
            <div className="about-content__text">
              <p className="text-top">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverrae et dolore
                magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                commodo viverra maecenas accumsan lacus vel facilisis. viverra
                maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                amet, labore et dolore magna aliqua.{" "}
              </p>
              <p className="text-top">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverrae et dolore
                magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                commodo viverra maecenas accumsan lacus vel facilisis. viverra
                maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                amet, labore et dolore magna aliqua.{" "}
              </p>
              <div className="layout-img">
                {/* <img src={Layout1} alt="layout1" /> */}
              </div>
              <div className="details-content">
                <div className="container">
                  <p className="details-content__title-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverrae et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida.{" "}
                  </p>
                  <div className="list-content-details">
                    {array.map((list, index) => {
                      return (
                        <div className="content-list" key={index}>
                          <img src={icon} alt="icon" />
                          <p className="content-list__details">{list.text}</p>
                        </div>
                      );
                    })}
                  </div>
                  <button className="btn-more">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-acknowledgement__extra">
        <div className="container">
          <div className="extra-content">
            <p className="extra-title">Lorem ipsum</p>
            <p className="extra-content-details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo Quis ipsum
              suspendisse ultrices gravida. Risus commodo viverrae et dolore
              magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </p>
            <div>
              {array.map((list, index) => {
                return (
                  <div className="extra-list" key={index}>
                    <img src={icon} alt="icon" />
                    <p className="extra-list__details"> {list.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
