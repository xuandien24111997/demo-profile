import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./quiz-modal.scss";
import Button from "@material-ui/core/Button";
import { uploadAudio as uploadAudioApi } from "service/admin/uploadFile";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function BasketModal({
  isVisibleModal,
  setIsVisibleModal,
  handleClose,
  quizzes,
  setQuizzes,
  updateQuizzesAction,
  createQuizzesAction,
  setPageNumber,
  audio,
  setAudio,
}) {
  const classes = useStyles();
  const [onValidate, setOnValidate] = useState(false);
  const uploadAudio = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        let audio = document.getElementById("audio");
        audio.src = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
      setAudio({ formFile: event.target.files[0] });
    }
  };
  const uploadAudioReq = async () => {
    const formDataAudio = new FormData();
    formDataAudio.append("uploadFile", audio.formFile);
    const audioReq = await uploadAudioApi(formDataAudio);
    if (audioReq && audioReq.status === 200 && audioReq.data)
      return audioReq.data;
    else return "";
  };
  const onUpdate = async () => {
    setOnValidate(true);
    console.log("quizzes", quizzes);
    if (
      quizzes.question !== "" &&
      quizzes.information !== "" &&
      quizzes.nameAudioShow !== "" &&
      quizzes.answers.some((item) => item.text !== "")
    ) {
      let dataUpdate = { ...quizzes };
      if (audio.formFile !== "") {
        const resAudio = await uploadAudioReq();
        dataUpdate = { ...dataUpdate, audio: { ...resAudio } };
      }
      setIsVisibleModal(false);
      await updateQuizzesAction(dataUpdate);
      setAudio({ formFile: "" });
      setPageNumber(1);
      setQuizzes({
        question: "",
        information: "",
        informationLink: "",
        nameAudioShow: "",
        answers: [
          {
            text: "",
            isAnswer: true,
          },
          {
            text: "",
            isAnswer: false,
          },
          {
            text: "",
            isAnswer: false,
          },
        ],
        audio: {
          name: "",
          path: "",
          url: "",
        },
        lang: JSON.parse(localStorage.getItem("idLanguage")),
      });
      setOnValidate(false);
    }
  };
  const onCreate = async () => {
    setOnValidate(true);
    if (
      quizzes.question !== "" &&
      quizzes.information !== "" &&
      quizzes.nameAudioShow !== "" &&
      quizzes.answers.some((item) => item.text !== "") &&
      audio.formFile !== ""
    ) {
      let dataCreate = { ...quizzes };
      const resAudio = await uploadAudioReq();
      dataCreate = { ...dataCreate, audio: { ...resAudio } };
      setIsVisibleModal(false);
      await createQuizzesAction(dataCreate);
      setAudio({ formFile: "" });
      setPageNumber(1);
      setQuizzes({
        question: "",
        information: "",
        informationLink: "",
        nameAudioShow: "",
        answers: [
          {
            text: "",
            isAnswer: true,
          },
          {
            text: "",
            isAnswer: false,
          },
          {
            text: "",
            isAnswer: false,
          },
        ],
        audio: {
          name: "",
          path: "",
          url: "",
        },
        lang: JSON.parse(localStorage.getItem("idLanguage")),
      });
      setOnValidate(false);
    }
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isVisibleModal}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isVisibleModal}>
        <div className="basket-modal">
          <div className="basket-modal__heading">
            <h2 className="basket-modal__title">
              {quizzes._id ? "Edit Quiz" : "Create Quiz"}
            </h2>
          </div>
          <div className="basket-modal__container">
            <div className="basket-modal__container-left">
              <div className="row">
                <div
                  className="col-12"
                  style={{ textAlign: "center", fontWeight: "bold" }}
                ></div>
                <div className="col-12">
                  <div className="basket-modal__username">
                    <span className="basket-modal__text">Audio *</span>
                    <audio
                      style={{
                        width: "100%",
                        display: "block",
                        marginTop: "2rem",
                      }}
                      id="audio"
                      src={
                        quizzes.audio.url !== ""
                          ? "http://" + quizzes.audio.url
                          : quizzes.audio.url
                      }
                      controls
                      controlsList="nodownload"
                    >
                      Your browser does not support the audio element.
                    </audio>
                    <input
                      className="mt-4"
                      type="file"
                      onChange={(e) => uploadAudio(e)}
                    />
                    {onValidate && audio.formFile === "" && (
                      <p
                        className="error-text mt-3"
                        style={{ position: "initial" }}
                      >
                        Please upload Audio File !
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <div className="basket-modal__username">
                    <span className="basket-modal__text">Question *</span>
                    <input
                      type="text"
                      className="basket-modal__input"
                      onChange={(e) =>
                        setQuizzes({
                          ...quizzes,
                          question: e.target.value,
                        })
                      }
                      value={quizzes.question}
                    />
                    {onValidate && quizzes.question === "" && (
                      <p className="error-text">Please enter Question !</p>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <div className="basket-modal__username">
                    <span className="basket-modal__text">Information *</span>
                    <input
                      type="text"
                      className="basket-modal__input"
                      onChange={(e) =>
                        setQuizzes({
                          ...quizzes,
                          information: e.target.value,
                        })
                      }
                      value={quizzes.information}
                    />
                    {onValidate && quizzes.information === "" && (
                      <p className="error-text">Please enter Information !</p>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <div className="basket-modal__username">
                    <span className="basket-modal__text">Information Link</span>
                    <input
                      type="text"
                      className="basket-modal__input"
                      onChange={(e) =>
                        setQuizzes({
                          ...quizzes,
                          informationLink: e.target.value,
                        })
                      }
                      value={quizzes.informationLink}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="basket-modal__username">
                    <span className="basket-modal__text">Name Audio *</span>
                    <input
                      type="text"
                      className="basket-modal__input"
                      onChange={(e) =>
                        setQuizzes({
                          ...quizzes,
                          nameAudioShow: e.target.value,
                        })
                      }
                      value={quizzes.nameAudioShow}
                    />
                    {onValidate && quizzes.nameAudioShow === "" && (
                      <p className="error-text">Please enter Name Audio !</p>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <div className="basket-modal__username">
                    <span className="basket-modal__text">
                      Answers ( Select one correct answer) *
                    </span>
                    <div className="mt-2">
                      <RadioGroup
                        aria-label="gender"
                        name="gender1"
                        value={
                          quizzes.answers[0].isAnswer
                            ? "a"
                            : quizzes.answers[1].isAnswer
                            ? "b"
                            : "c"
                        }
                        onChange={(e) => {
                          const answers = [...quizzes.answers];
                          if (e.target.value === "a") {
                            answers[0].isAnswer = true;
                            answers[1].isAnswer = false;
                            answers[2].isAnswer = false;
                            setQuizzes({ ...quizzes, answers: answers });
                          } else if (e.target.value === "b") {
                            answers[1].isAnswer = true;
                            answers[0].isAnswer = false;
                            answers[2].isAnswer = false;
                            setQuizzes({ ...quizzes, answers: answers });
                          } else {
                            answers[2].isAnswer = true;
                            answers[1].isAnswer = false;
                            answers[0].isAnswer = false;
                            setQuizzes({ ...quizzes, answers: answers });
                          }
                        }}
                      >
                        <div className="d-flex align-items-center">
                          <FormControlLabel
                            value="a"
                            control={<Radio />}
                            label="A"
                          />
                          <input
                            type="text"
                            className="basket-modal__input"
                            style={{ margin: 0 }}
                            value={quizzes.answers[0].text}
                            onChange={(e) => {
                              const answers = [...quizzes.answers];
                              answers[0].text = e.target.value;
                              setQuizzes({ ...quizzes, answers: answers });
                            }}
                          />
                        </div>
                        <div className="d-flex align-items-center mt-3">
                          <FormControlLabel
                            value="b"
                            control={<Radio />}
                            label="B"
                          />
                          <input
                            type="text"
                            className="basket-modal__input"
                            style={{ margin: 0 }}
                            value={quizzes.answers[1].text}
                            onChange={(e) => {
                              const answers = [...quizzes.answers];
                              answers[1].text = e.target.value;
                              setQuizzes({ ...quizzes, answers: answers });
                            }}
                          />
                        </div>
                        <div className="d-flex align-items-center mt-3">
                          <FormControlLabel
                            value="c"
                            control={<Radio />}
                            label="C"
                          />
                          <input
                            type="text"
                            className="basket-modal__input"
                            style={{ margin: 0 }}
                            value={quizzes.answers[2].text}
                            onChange={(e) => {
                              const answers = [...quizzes.answers];
                              answers[2].text = e.target.value;
                              setQuizzes({ ...quizzes, answers: answers });
                            }}
                          />
                        </div>
                      </RadioGroup>
                    </div>
                    {onValidate &&
                      quizzes.answers.some((item) => item.text === "") && (
                        <p
                          className="error-text mt-3"
                          style={{ position: "initial" }}
                        >
                          Please enter Full Answers !
                        </p>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="basket-modal__footer">
            <button className="basket-modal__btn-cancel" onClick={handleClose}>
              Cancel
            </button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#927c04",
                color: "#FFFFFF",
                textTransform: "none",
                marginRight: 10,
                fontFamily: "OpenSans-Regular",
              }}
              aria-label="add"
              onClick={() => {
                if (quizzes._id) onUpdate();
                else onCreate();
              }}
            >
              <i className="zmdi zmdi-account-add zmdi-hc-fw" />
              <span>{quizzes._id ? "Save" : "Create"}</span>
            </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

export default BasketModal;
