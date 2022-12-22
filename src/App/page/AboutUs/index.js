import React from "react";
import history from "ultils/history";
import home from "../../../assets/images/Home.png";
import left from "../../../assets/images/left.png";

export default function index() {
  return (
    <div className="page-about-us">
      <div className="about-us">
        <div className="about-us-div"></div>
        <div className="link-move container">
          <div className="link-move__left">
            <div className="leftRight">
              <img alt="img" src={home} />
              <p className="Home_text" onClick={() => history.push("/")}>
                {" "}
                Home
              </p>
              <span>\</span>
              <p className="Alphabet">About us</p>
            </div>
          </div>
          <div className="link-move__right" onClick={() => history.goBack()}>
            <img alt="img" src={left} />
            <p> Back to Previous Page</p>
          </div>
        </div>
      </div>

      <div className="page-about-us__more-about">
        <div className="container">
          <div className="about-content">
            <p className="about">ABOUT US</p>
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
              <p className="text-bottom">
                {" "}
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverrae
                et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                Risus commodo viverra maecenas accumsan lacus vel facilisis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
