import React, { useEffect } from "react";
import home from "../../../assets/images/Home.png";
import left from "../../../assets/images/left.png";
import layout from "../../../assets/images/Layer37.png";
import icon from "../../../assets/images/icon.png";
import history from "ultils/history";

export default function Contributes() {
  const array = [
    { text: " Lorem ipsum dolor sit amet, consectetur adipiscing." },
    { text: "Morbi iaculis ante ut leo varius elementum." },
    { text: "Maecenas pharetra ligula quis sapien elementum." },
    { text: "Nulla sodales lectus non condimentum viverra." },
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing." },
    { text: "Morbi iaculis ante ut leo varius elementum." },
    { text: "Maecenas pharetra ligula quis sapien elementum." },
    { text: "Nulla sodales lectus non condimentum viverra." },
    { text: "Maecenas pharetra ligula quis sapien elementum." },
    { text: "Nulla sodales lectus non condimentum viverra." },
  ];
  return (
    <div className="page-contributes">
      <div className="contributes">
        <div className="contributes-div"></div>
        <div className="link-move container">
          <div className="link-move__left">
            <div className="leftRight">
              <img alt="img" src={home} />
              <p className="Home_text" onClick={() => history.push("/")}>
                {" "}
                Home
              </p>
              <span>\</span>
              <p className="Alphabet">Contributes to the project</p>
            </div>
          </div>
          <div className="link-move__right" onClick={() => history.goBack()}>
            <img alt="img" src={left} />
            <p> Back to Previous Page</p>
          </div>
        </div>
      </div>
      <div className="page-contributes__more-about">
        <div className="container">
          <div className="about-content">
            <p className="about">Contributes to the project</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p className="line"></p>
            </div>
            <div className="about-content__text">
              <p className="text-detail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverrae et dolore
                magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                commodo viverra maecenas accumsan lacus vel facilisis. viverra
                maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                amet, labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className="about-content__list-about">
              {array.map((list, index) => {
                return (
                  <div
                    className="list-contributes"
                    key={index}
                    style={
                      index === 1
                        ? { width: "48.5%" }
                        : index === 3
                        ? { width: "48.5%" }
                        : index === 5
                        ? { width: "48.5%" }
                        : index === 7
                        ? { width: "48.5%" }
                        : index === 9
                        ? { width: "48.5%" }
                        : {}
                    }
                  >
                    <img alt="" src={icon} />
                    <p className="list-details"> {list.text}</p>
                  </div>
                );
              })}
            </div>
            <div className="about-content__layout">
              {/* <img alt="" src={layout} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
