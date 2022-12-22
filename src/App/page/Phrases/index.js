import React, { useEffect, useState } from "react";
import home from "../../../assets/images/Home.png";
import left from "../../../assets/images/left.png";
import { connect } from "react-redux";
import history from "ultils/history";

const Phases = ({ listPhrases, getListPhrasesAction, detailPhraseSetting, phraseSettings, loading }) => {
  const [open, setOpen] = useState(false);
  const [openIdModel, setOpenIdModel] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  useEffect(() => {
    getListPhrasesAction({
      Keyword: "",
      TotalOrderForOnePage: 100,
      PageNumber: 1,
      IsOrderNewASC: false,
      Language: JSON.parse(localStorage.getItem("clientLanguage")).id || "",
    });
    setSelectedLanguage(
      (JSON.parse(localStorage.getItem("clientLanguage")).name || "").toUpperCase()
    );
  }, [JSON.parse(localStorage.getItem("clientLanguage")).id]);

  useEffect(() => {
    detailPhraseSetting(JSON.parse(localStorage.getItem("clientLanguage")).id || null)
  }, [])

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = (id) => {
    setOpenIdModel(id)
    setOpen(true);
  };

  return (
    <div className="phrases">
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
              {" "}
              {JSON.parse(localStorage.getItem("clientLanguage")).name || ""}
            </p>
            <span>\</span>
            <p className="Alphabet">20 Most Frequenlty Used Phrases</p>
          </div>
        </div>
        <div className="link-move__right" onClick={() => history.goBack()}>
          <img alt="img" src={left} />
          <p> Back to Previous Page</p>
        </div>
      </div>
      <div className="alphabet__more-about">
        <p className="about">{`${selectedLanguage} -`}</p>
        <p className="about">20 MOST FREQUENTLY USED PHRASES</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p className="line"></p>
        </div>
      </div>
      <div className="phrases__list-item">
        <div className="container">
          <div className="list-title">
            <div className="list-title__header english ">
              <p> Phrases in English </p>
            </div>
            <div className="list-title__header romanisation ">
              <p> Orthography 1 </p>
            </div>
            <div className="list-title__header orthography ">
              <p> Orthography 2</p>
            </div>
          </div>
          {Array.isArray(listPhrases) &&
            listPhrases.length > 0 &&
            listPhrases.map((list, index) => {
              return (
                <div className="list-content" key={index}>
                  <div
                    className="content-text list-content__english"
                    // dangerouslySetInnerHTML={{
                    //   __html: list.means,
                    // }}
                  >
                     <p>{list.means}</p>
                  {list.note && list.note.length > 0 && (
                    <i class="fas fa-lightbulb" key={index} onClick={() => handleTooltipOpen(list._id)}></i>
                  )}
                     {openIdModel ===  list._id &&  open && (
                    <>
                      <div className="modal-light" key={index}>
                        <div className="light-icon">
                          <img
                            src={require("assets/images/icon-pha.svg").default}
                            alt="img"
                          />
                        </div>

                        <div className="light-modal">
                          <div
                            className="light-close"
                            onClick={handleTooltipClose}
                          >
                            <img
                              src={
                                require("assets/images/icon-close.png").default
                              }
                              alt="img"
                            />
                          </div>
                          <div className="modal-details">
                            <p className="title">Cultural Notes</p>
                            <div
                            dangerouslySetInnerHTML={{
                              __html: list.note,
                            }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  </div>
                  <div className=" content-text list-content__roma">
                    <div
                      className="roma-title"
                      dangerouslySetInnerHTML={{
                        __html: list.spelling,
                      }}
                    ></div>
                    <div className="roma-play">
                      <i
                        className="fas fa-play-circle"
                        onClick={() => {
                          const audio = document.getElementById(
                            "audio__phrases-" + index
                          );
                          audio.play();
                        }}
                      ></i>
                      <audio
                        id={"audio__phrases-" + index}
                        src={"http://" + list.audio.url}
                        controls
                        controlsList="nodownload"
                        style={{ display: "none" }}
                      ></audio>
                    </div>
                  </div>
                  <div
                    className="content-text list-content__orth"
                    dangerouslySetInnerHTML={{
                      __html: list.word,
                    }}
                  ></div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="phrases__apply">
        <div className="container">
          <div className="apply-take">
            <p className="about">APPLY WHAT YOU’VE LEARNED</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p className="line"></p>
            </div>
            <p className="take"> Take a look at the following dialogues</p>
          </div>
          <div className="apply-img">
            {
              !loading && (
                <div dangerouslySetInnerHTML={{__html: phraseSettings.dialogue_image}} />
              )
            }
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
  );
};
const mapDispatchToProps = (dispatch) => {
  const { getListPhrasesAction } = require("redux/adminPhrasesRedux");
  const { detailPhraseSettingAction } = require("redux/adminPhraseSettingRedux");
  return {
    getListPhrasesAction: (data) => dispatch(getListPhrasesAction(data)),
    detailPhraseSetting: (payload) => dispatch(detailPhraseSettingAction(payload)),
  };
};

const mapStateToProps = (state) => ({
  listPhrases: state.phrases.listPhrases,
  Loading: state.phraseSetting.loading,
  phraseSettings: state.phraseSetting.settings
});

export default connect(mapStateToProps, mapDispatchToProps)(Phases);
