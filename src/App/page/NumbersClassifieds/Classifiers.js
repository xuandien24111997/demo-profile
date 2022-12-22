/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import Go3 from "./Go3";
import Muiten from "../../../assets/images/muiten.png";
import { connect } from "react-redux";

const Classifiers = ({ getListClassifiedAction, listClassifieds }) => {
  useEffect(() => {
    let data = {
      Keyword: "",
      TotalOrderForOnePage: 100,
      PageNumber: 1,
      IsOrderNewASC: false,
      Language: JSON.parse(localStorage.getItem("clientLanguage")).id || "",
    };
    getListClassifiedAction(data);
  }, []);

  return (
    <div className="currency__apply">
      <div className="container">
        <div className="apply-take">
          <p className="about">CLASSIFIERS</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p className="line"></p>
          </div>
        </div>
        <div className="apply-img">
          <div
            className="orthography inCantonese"
            style={{
              color: "#344955",
              fontFamily: "NotoSansTC-Bold",
            }}
          >
            <p>
              in Cantonese, classifiers are commonly used in counting.
              <br />
              Take a look at the following example:
            </p>
          </div>
        </div>

        {/* SAW DOG */}
        <div className="sawDog">
          <div className="left">
            <p>I saw a dog.</p>
          </div>
          <div className="middle">
            <div className="top">
              <p>我見到</p>
              <p>
                <span>一</span>隻
              </p>
              <p>狗。</p>
            </div>
            <div className="bottom">
              <img src={Muiten} style={{ margin: "17px 0px 0px 1px" }} />
            </div>
          </div>
          <div className="right">
            <p>ngo5 gin3 dou2 jat1 zek3 gau2</p>
          </div>
        </div>

        <div className="click-below">
          <p>
            Click below to learn about the aplications of some common <br />
            classifiers used in Cantonese.
          </p>
          <div className="ul-table">
            <ul>
              {listClassifieds &&
                listClassifieds.map((item, index) => {
                  return (
                    <li
                      style={{
                        borderRadius:
                          index === 0
                            ? "5px 0 0 0"
                            : index === 0
                            ? "0 0 5px 0"
                            : "",
                      }}
                    >
                      <span className="span-clickBelow">{item.word}</span>{" "}
                      {item.spelling}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        {listClassifieds &&
          listClassifieds.map((item, index) => {
            return (
              item.classifiers.length > 0 && (
                <Go3 key={index} classified={item} />
              )
            );
          })}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  const {
    getListClassifiedAction,
  } = require("redux/adminNumbersClassifiedsRedux");
  return {
    getListClassifiedAction: (data) => dispatch(getListClassifiedAction(data)),
  };
};

const mapStateToProps = (state) => ({
  listClassifieds: state.numbersClassifieds.listClassifieds,
});

export default connect(mapStateToProps, mapDispatchToProps)(Classifiers);
