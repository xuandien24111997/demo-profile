import React, { useEffect } from "react";
import Ellipse2 from "../../../assets/images/page2/ellipse2.png";
import layer7 from "../../../assets/images/page2/Layer 7.png";
import layer8 from "../../../assets/images/page2/Layer 8.png";
import layer9 from "../../../assets/images/page2/Layer 9.png";
import layer10 from "../../../assets/images/page2/Layer 10.png";
import layer14 from "../../../assets/images/page2/Layer 14.png";
import layer13 from "../../../assets/images/page2/Layer 13.png";
import layer12 from "../../../assets/images/page2/Layer 12.png";
import layer11 from "../../../assets/images/page2/Layer 11.png";
import history from "ultils/history";
import { connect } from "react-redux";

function LanguageCantonese({ phraseSettings, detailPhraseSetting, loading }) {
  useEffect(() => {
    detailPhraseSetting(JSON.parse(localStorage.getItem("clientLanguage")).id || null)
  }, [])
  return (
    <div className="language-cantonese">
      <div className="container">
        <div className="language-cantonese__more-about">
          <p className="about" style={{ textTransform: "uppercase" }}>
            MORE ABOUT -{" "}
            {JSON.parse(localStorage.getItem("clientLanguage")).name}
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p className="line"></p>
          </div>
        </div>
        <div className="language-cantonese__cantonese">
          <div className="content">
            <div>
              <div className="content__img">
                <img alt="img" className="img-div" src={phraseSettings?.culture_image ? `http://${phraseSettings.culture_image}` : Ellipse2} />
              </div>
            </div>
            <div className="text-div">
              <div className="content__text">
                <p className="text-title">Culture</p>
                <p className="text-content">
                  {loading ? "" : phraseSettings.culture}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="language-cantonese__learning-modules">
          <p className="module-title">Learning Modules</p>
          <div className="title-div">
            <div
              className="module-list"
              onClick={() => history.push("/phrases")}
            >
              <div className="module-list__module-img">
                <img alt="img" className="list-img" src={layer7} />
              </div>
              <div className="module-list__module-title">
                <p className="list-title">20 Most frequently used phrases </p>
              </div>
            </div>
            <div
              className="module-list"
              onClick={() => history.push("/directions")}
            >
              <div className="module-list__module-img">
                <img alt="img" className="list-img" src={layer8} />
              </div>
              <div className="module-list__module-title">
                <p className="list-title">Directions</p>
              </div>
            </div>
            <div
              className="module-list"
              onClick={() => history.push("/numbers-classifieds")}
            >
              <div className="module-list__module-img">
                <img alt="img" className="list-img" src={layer9} />
              </div>
              <div className="module-list__module-title">
                <p className="list-title">
                  Numbers <br /> & Classifiers{" "}
                </p>
              </div>
            </div>
            <div className="module-list" onClick={() => history.push("/time")}>
              <div className="module-list__module-img">
                <img alt="img" className="list-img" src={layer10} />
              </div>
              <div className="module-list__module-title">
                <p className="list-title">Time</p>
              </div>
            </div>
          </div>
          <div className="title-div">
            <div
              className="module-list"
              onClick={() => history.push("/alphabet")}
            >
              <div className="module-list__module-img">
                <img alt="img" className="list-img" src={layer14} />
              </div>
              <div className="module-list__module-title">
                <p className="list-title">Alphabet </p>
              </div>
            </div>
            <div
              className="module-list"
              onClick={() => history.push("/hand-gestures")}
            >
              <div className="module-list__module-img">
                <img alt="img" className="list-img" src={layer13} />
              </div>
              <div className="module-list__module-title">
                <p className="list-title">Hand Gestures</p>
              </div>
            </div>
            <div
              className="module-list"
              onClick={() => history.push("/finger-counting")}
            >
              <div className="module-list__module-img">
                <img alt="img" className="list-img" src={layer12} />
              </div>
              <div className="module-list__module-title">
                <p className="list-title">Finger Counting </p>
              </div>
            </div>
            <div className="module-list" onClick={() => history.push("/quiz")}>
              <div className="module-list__module-img">
                <img alt="img" className="list-img" src={layer11} />
              </div>
              <div className="module-list__module-title">
                <p className="list-title">Quiz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bottom-div"></div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  const { detailPhraseSettingAction } = require("redux/adminPhraseSettingRedux");
  return {
    detailPhraseSetting: (payload) => dispatch(detailPhraseSettingAction(payload)),
  };
};

const mapStateToProps = (state) => ({
  loading: state.phraseSetting.loading,
  phraseSettings: state.phraseSetting.settings
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageCantonese);
