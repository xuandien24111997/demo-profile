import React, { useEffect, useState, useMemo } from "react";
import home from "../../../assets/images/Home.png";
import left from "../../../assets/images/left.png";
import { connect } from "react-redux";
import history from "ultils/history";
import _ from "lodash"
import { AllocationAlertsSuccess } from "components/Alert";

const Quiz = ({ listQuizzes, getListQuizzesAction }) => {
  const [indexItem, setIndexItem] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [answers, setAnswers] = useState({})

  useEffect(() => {
    getListQuizzesAction({
      Keyword: "",
      TotalOrderForOnePage: 100,
      PageNumber: 1,
      IsOrderNewASC: false,
      Language: JSON.parse(localStorage.getItem("clientLanguage")).id || "",
    });
    setSelectedLanguage(
      (JSON.parse(localStorage.getItem("clientLanguage")).name || "").toUpperCase()
    );
  }, []);

  const onAnswer = (item) => {
    const questionObject = listQuizzes[indexItem]
    setAnswers((prev) => ({
      ...prev,
      [questionObject._id]: item
    }))
  }

  const answerObject = useMemo(() => {
    const questionObject = listQuizzes[indexItem]
    const ans = answers[questionObject?._id]

    return ans ? { ...answers[questionObject?._id], questionId: questionObject?._id } : {}
  }, [answers, indexItem])

  const submitResult = () => {
    const count = _.reduce(listQuizzes, (sum, n) => {
      const answer = answers[n._id]
      return answer.isAnswer ? sum + 1 : sum
    }, 0)
    AllocationAlertsSuccess(`Your result: ${count}/${listQuizzes.length}`)
  }

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
              <p className="Home_text" onClick={() => history.push("/select-language")}>
                {JSON.parse(localStorage.getItem("clientLanguage")).name || ""}
              </p>
              <span>\</span>
              <p className="Alphabet">Quiz</p>
            </div>
          </div>
          <div className="link-move__right" onClick={() => history.goBack()}>
            <img alt="img" src={left} />
            <p> Back to Previous Page</p>
          </div>
        </div>
        <div className="alphabet__more-about">
          <p className="about">{`${selectedLanguage} - QUIZ`}</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p className="line"></p>
          </div>
        </div>
      </div>
      <div className="quiz-page ">
        {Array.isArray(listQuizzes) && listQuizzes.length > 0 && (
          <div className="container">
            <p className="title">
              {indexItem + 1}.<span>{listQuizzes[indexItem].question}</span>
            </p>
            <div className="content">
              <div className="content__click">
                <a href={listQuizzes[indexItem].informationLink} className="click-icon">
                  <i className="fas fa-chevron-circle-left"></i>
                </a>
                <p>{listQuizzes[indexItem].information}</p>
              </div>
              <div className="content__question">
                <div className="roma-play">
                  <i
                    className="fas fa-play-circle"
                    onClick={() => {
                      const audio = document.getElementById(
                        "audio__quizz" + indexItem
                      );
                      audio.play();
                    }}
                  ></i>
                  <audio
                    id={"audio__quizz" + indexItem}
                    src={"http://" + listQuizzes[indexItem].audio.url}
                    controls
                    controlsList="nodownload"
                    style={{ display: "none" }}
                  ></audio>
                </div>
                <p>{listQuizzes[indexItem].nameAudioShow}</p>
              </div>
              <div className="content__answer">
                {
                  listQuizzes[indexItem].answers.map((eq, index) => (
                    <p className={(listQuizzes[indexItem]._id !== answerObject?.questionId) || !answerObject ? "" : eq?.isAnswer ? "success" : answerObject?._id === eq?._id && `${eq.isAnswer}`} key={index} onClick={() => onAnswer(eq)}>
                      {index === 0 ? "a" : index === 1 ? "b" : "c"}. <span>{eq.text}</span>
                      {listQuizzes[indexItem]._id !== answerObject?.questionId || !answerObject ? null : eq?.isAnswer ? <i class="fas fa-check"></i> : answerObject?._id === eq?._id && <span className="wrong">x</span>}
                    </p>
                  ))
                }
              </div>
              <div className="content__button">
                {indexItem > 0 && <button
                  onClick={() => {
                    setIndexItem(indexItem - 1);
                  }}
                >
                  <i className="fas fa-long-arrow-alt-left"></i> Back
                </button>}
                {indexItem + 1 !== listQuizzes.length && <button
                  onClick={() => {
                    if (indexItem < listQuizzes.length - 1)
                      setIndexItem(indexItem + 1);
                  }}
                >
                  Next <i className="fas fa-long-arrow-alt-right"></i>
                </button>}
                {indexItem + 1 === listQuizzes.length && <button
                  onClick={submitResult}
                >
                  Submit
                </button>}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  const { getListQuizzesAction } = require("redux/adminQuizzesRedux");
  return {
    getListQuizzesAction: (data) => dispatch(getListQuizzesAction(data)),
  };
};

const mapStateToProps = (state) => ({
  listQuizzes: state.quizzes.listQuizzes,
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
