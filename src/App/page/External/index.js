import React from "react";
import home from "../../../assets/images/Home.png";
import left from "../../../assets/images/left.png";
import icon from "../../../assets/images/icon.png";
import history from "ultils/history";

export default function External() {
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
    <div className="page-external">
      <div className="external">
        <div className="external-div"></div>
        <div className="link-move container">
          <div className="link-move__left">
            <div className="leftRight">
              <img alt="img" src={home} />
              <p className="Home_text" onClick={() => history.push("/")}>
                {" "}
                Home
              </p>
              <span>\</span>
              <p className="Alphabet"> External Resources</p>
            </div>
          </div>
          <div className="link-move__right" onClick={() => history.goBack()}>
            <img alt="img" src={left} />
            <p> Back to Previous Page</p>
          </div>
        </div>
      </div>
      <div className="page-external__more-about">
        <div className="container">
          <div className="about-content">
            <p className="about">External Resources</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p className="line"></p>
            </div>
            <div className="about-content__list-about">
              {array.map((list, index) => {
                return (
                  <div
                    className="list-external"
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
