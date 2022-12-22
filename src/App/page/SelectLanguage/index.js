import React, { useState, useEffect } from "react";
import home from "../../../assets/images/Home.png";
import left from "../../../assets/images/left.png";
import { connect } from "react-redux";
import WordLanguage from "./components/WordLanguage";
import history from "ultils/history";

const SelectLanguage = ({ listLanguages, getListLanguagesAction }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  useEffect(() => {
    let data = {
      Keyword: "",
      TotalOrderForOnePage: 999,
      PageNumber: 1,
      IsOrderNewASC: true,
    };
    getListLanguagesAction(data);
  }, []);

  const array1 = [
    { text: "A" },
    { text: "B" },
    { text: "C" },
    { text: "D" },
    { text: "E" },
    { text: "F" },
    { text: "G" },
    { text: "H" },
    { text: "I" },
    { text: "J" },
    { text: "K" },
    { text: "L" },
    { text: "M" },
  ];
  const array2 = [
    { text: "N" },
    { text: "O" },
    { text: "P" },
    { text: "Q" },
    { text: "R" },
    { text: "S" },
    { text: "T" },
    { text: "U" },
    { text: "V" },
    { text: "W" },
    { text: "X" },
    { text: "Y" },
    { text: "Z" },
  ];

  let group_a = listLanguages.filter(
    (word) => word.name.slice(0, 1).toLowerCase() === "a"
  );
  let group_b = listLanguages.filter(
    (word) => word.name.slice(0, 1).toLowerCase() === "b"
  );
  let group_c = listLanguages.filter(
    (word) => word.name.slice(0, 1).toLowerCase() === "c"
  );
  let group_d = listLanguages.filter(
    (word) => word.name.slice(0, 1).toLowerCase() === "d"
  );
  let group_e = listLanguages.filter(
    (word) => word.name.slice(0, 1).toLowerCase() === "e"
  );
  let group_f = listLanguages.filter(
    (word) => word.name.slice(0, 1).toLowerCase() === "f"
  );
  let group_g = listLanguages.filter(
    (word) => word.name.slice(0, 1).toLowerCase() === "g"
  );
  let group_h = listLanguages.filter(
    (word) => word.name.slice(0, 1).toLowerCase() === "h"
  );
  let group_i = listLanguages.filter(
    (word) => word.name.slice(0, 1).toLowerCase() === "i"
  );
  let group_j = listLanguages.filter(
    (word) => word.name.slice(0, 1).toLowerCase() === "j"
  );
  let group_k = listLanguages.filter(
    (word) => word.name.slice(0, 1).toLowerCase() === "k"
  );
  let group_l = listLanguages.filter(
    (word) => word.name.slice(0, 1).toLowerCase() === "l"
  );
  let group_m = listLanguages.filter(
    (word) => word.name.slice(0, 1).toLowerCase() === "m"
  );
  let group_n = listLanguages.filter(
    (word) => word.name.slice(0, 1).toLowerCase() === "n"
  );
  let group_o = listLanguages.filter(
    (word) => word.name.slice(0, 1).toLowerCase() === "o"
  );
  let group_p = listLanguages.filter(
    (word) => word.name.slice(0, 1).toLowerCase() === "p"
  );
  let group_q = listLanguages.filter(
    (word) => word.name.slice(0, 1).toLowerCase() === "q"
  );
  let group_r = listLanguages.filter(
    (word) => word.name.slice(0, 1).toLowerCase() === "r"
  );
  let group_s = listLanguages.filter(
    (word) => word.name.slice(0, 1).toLowerCase() === "s"
  );
  let group_t = listLanguages.filter(
    (word) => word.name.slice(0, 1).toLowerCase() === "t"
  );
  let group_u = listLanguages.filter(
    (word) => word.name.slice(0, 1).toLowerCase() === "u"
  );
  let group_v = listLanguages.filter(
    (word) => word.name.slice(0, 1).toLowerCase() === "v"
  );
  let group_w = listLanguages.filter(
    (word) => word.name.slice(0, 1).toLowerCase() === "w"
  );
  let group_y = listLanguages.filter(
    (word) => word.name.slice(0, 1).toLowerCase() === "y"
  );
  let group_x = listLanguages.filter(
    (word) => word.name.slice(0, 1).toLowerCase() === "x"
  );
  let group_z = listLanguages.filter(
    (word) => word.name.slice(0, 1).toLowerCase() === "z"
  );

  return (
    <>
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
              <p className="Alphabet">Module 01-20 Phrases</p>
            </div>
          </div>
          <div className="link-move__right" onClick={() => history.goBack()}>
            <img alt="img" src={left} />
            <p> Back to Previous Page</p>
          </div>
        </div>
        <div className="alphabet__more-about">
          <p className="about" style={{ fontSize: "38px" }}>
            SELECT A LANGUAGE
          </p>
        </div>
      </div>
      <div className="select-language">
        <div className="language">
          <div className="container">
            <div className="language-text">
              <div className="div-text">
                {array1.map((item, index) => {
                  return (
                    <p
                      className="text"
                      key={index}
                      style={{
                        cursor: "pointer",
                        color: selectedLanguage === item.text ? "#f9aa33" : "",
                      }}
                      onClick={() => setSelectedLanguage(item.text)}
                    >
                      {item.text}
                    </p>
                  );
                })}
              </div>
              <div className="div-text">
                {array2.map((item, index) => {
                  return (
                    <p
                      className="text"
                      key={index}
                      style={{ cursor: "pointer",
                      color: selectedLanguage === item.text ? "#f9aa33" : "", }}
                      onClick={() => setSelectedLanguage(item.text)}
                    >
                      {item.text}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="language-content">
              <div className="content">
                <div className="content-center">
                  {(selectedLanguage === "" || selectedLanguage === "A") &&
                    group_a.length > 0 && (
                      <WordLanguage title="A" list={group_a} />
                    )}
                  {(selectedLanguage === "" || selectedLanguage === "B") &&
                    group_b.length > 0 && (
                      <WordLanguage title="B" list={group_b} />
                    )}
                  {(selectedLanguage === "" || selectedLanguage === "C") &&
                    group_c.length > 0 && (
                      <WordLanguage title="C" list={group_c} />
                    )}
                  {(selectedLanguage === "" || selectedLanguage === "D") &&
                    group_d.length > 0 && (
                      <WordLanguage title="D" list={group_d} />
                    )}
                  {(selectedLanguage === "" || selectedLanguage === "E") &&
                    group_e.length > 0 && (
                      <WordLanguage title="E" list={group_e} />
                    )}
                  {(selectedLanguage === "" || selectedLanguage === "F") &&
                    group_f.length > 0 && (
                      <WordLanguage title="F" list={group_f} />
                    )}
                  {(selectedLanguage === "" || selectedLanguage === "G") &&
                    group_g.length > 0 && (
                      <WordLanguage title="G" list={group_g} />
                    )}
                  {(selectedLanguage === "" || selectedLanguage === "H") &&
                    group_h.length > 0 && (
                      <WordLanguage title="H" list={group_h} />
                    )}
                  {(selectedLanguage === "" || selectedLanguage === "I") &&
                    group_i.length > 0 && (
                      <WordLanguage title="I" list={group_i} />
                    )}
                  {(selectedLanguage === "" || selectedLanguage === "J") &&
                    group_j.length > 0 && (
                      <WordLanguage title="J" list={group_j} />
                    )}
                  {(selectedLanguage === "" || selectedLanguage === "K") &&
                    group_k.length > 0 && (
                      <WordLanguage title="K" list={group_k} />
                    )}
                  {(selectedLanguage === "" || selectedLanguage === "L") &&
                    group_l.length > 0 && (
                      <WordLanguage title="L" list={group_l} />
                    )}
                  {(selectedLanguage === "" || selectedLanguage === "M") &&
                    group_m.length > 0 && (
                      <WordLanguage title="M" list={group_m} />
                    )}
                  {(selectedLanguage === "" || selectedLanguage === "N") &&
                    group_n.length > 0 && (
                      <WordLanguage title="N" list={group_n} />
                    )}
                  {(selectedLanguage === "" || selectedLanguage === "") &&
                    group_o.length > 0 && (
                      <WordLanguage title="O" list={group_o} />
                    )}
                </div>
              </div>

              <div className="content">
                <div className="content-center">
                  {(selectedLanguage === "" || selectedLanguage === "P") &&
                    group_p.length > 0 && (
                      <WordLanguage title="P" list={group_p} />
                    )}
                  {(selectedLanguage === "" || selectedLanguage === "Q") &&
                    group_q.length > 0 && (
                      <WordLanguage title="Q" list={group_q} />
                    )}
                  {(selectedLanguage === "" || selectedLanguage === "R") &&
                    group_r.length > 0 && (
                      <WordLanguage title="R" list={group_r} />
                    )}
                  {(selectedLanguage === "" || selectedLanguage === "S") &&
                    group_s.length > 0 && (
                      <WordLanguage title="S" list={group_s} />
                    )}
                  {(selectedLanguage === "" || selectedLanguage === "T") &&
                    group_t.length > 0 && (
                      <WordLanguage title="T" list={group_t} />
                    )}
                  {(selectedLanguage === "" || selectedLanguage === "U") &&
                    group_u.length > 0 && (
                      <WordLanguage title="U" list={group_u} />
                    )}
                  {(selectedLanguage === "" || selectedLanguage === "V") &&
                    group_v.length > 0 && (
                      <WordLanguage title="V" list={group_v} />
                    )}
                  {(selectedLanguage === "" || selectedLanguage === "Ư") &&
                    group_w.length > 0 && (
                      <WordLanguage title="W" list={group_w} />
                    )}
                  {(selectedLanguage === "" || selectedLanguage === "X") &&
                    group_x.length > 0 && (
                      <WordLanguage title="X" list={group_x} />
                    )}
                  {(selectedLanguage === "" || selectedLanguage === "Y") &&
                    group_y.length > 0 && (
                      <WordLanguage title="Y" list={group_y} />
                    )}
                  {(selectedLanguage === "" || selectedLanguage === "Z") &&
                    group_z.length > 0 && (
                      <WordLanguage title="Z" list={group_z} />
                    )}
                </div>
              </div>
            </div>
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
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  const { getListLanguagesAction } = require("redux/adminLanguagesRedux");
  return {
    getListLanguagesAction: (data) => dispatch(getListLanguagesAction(data)),
  };
};

const mapStateToProps = (state) => ({
  listLanguages: state.languageRedux.listLanguages,
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectLanguage);
