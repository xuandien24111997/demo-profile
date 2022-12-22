import React, { useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./about-model.scss";
import Button from "@material-ui/core/Button";
import { uploadAudio as uploadAudioApi } from "service/admin/uploadFile";

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

function AboutModel({
  isVisibleModal,
  setIsVisibleModal,
  handleClose,
  aboutAlphabet,
  setAboutAlphabet,
  updateAboutAlphabetAction,
  setPageNumber,
  setAudio,
  audio,
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
  
  const onSubmit = async () => {
    setOnValidate(true);
    {
      let dataUpdate = { ...aboutAlphabet };
      if (audio.formFile !== "") {
        const resAudio = await uploadAudioReq();
        dataUpdate = { ...dataUpdate, audio: { ...resAudio } };
      }
      setIsVisibleModal(false);
      await updateAboutAlphabetAction(dataUpdate);
      setAudio({ formFile: "" });
      // setPageNumber(1);
      setAboutAlphabet({
        word: "",
        audio: {
          name: "",
          path: "",
          url: "",
        },
        // lang: "614ae66de9e4d129a866cfe9",
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
            <h2 className="basket-modal__title">Edit Time</h2>
          </div>
          <div className="basket-modal__container">
            <div className="basket-modal__container-left">
              {aboutAlphabet &&
                (
                  <div className="row">
                    <div
                      className="col-12"
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      <h2>Edit Alphabet</h2>
                    </div>
                    <div className="col-12">
                      <div className="basket-modal__username">
                        <span className="basket-modal__text">Text *</span>
                        <input
                          type="text"
                          className="basket-modal__input"
                          onChange={(e) =>
                            setAboutAlphabet({
                              ...aboutAlphabet,
                              word: e.target.value,
                            })
                          }
                          value={aboutAlphabet.word}
                          // disabled
                        />
                        {aboutAlphabet.word === "" && (
                          <p className="error-text">Please enter Word !</p>
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="basket-modal__username">
                        <span className="basket-modal__text">Audio *</span>
                        {aboutAlphabet && (
                          <audio
                            style={{
                              width: "100%",
                              display: "block",
                              marginTop: "2rem",
                            }}
                            id="audio"
                            src={
                              aboutAlphabet.audio.url !== ""
                                ? "http://" + aboutAlphabet.audio.url
                                : aboutAlphabet.audio.url
                            }
                            controls
                            controlsList="nodownload"
                          >
                            Your browser does not support the audio element.
                          </audio>
                        )}
                        <input
                          className="mt-4"
                          type="file"
                          onChange={(e) => uploadAudio(e)}
                        />
                      </div>
                    </div>
                  </div>
                )}
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
                onSubmit();
              }}
            >
              <i className="zmdi zmdi-account-add zmdi-hc-fw" />
              <span>Save</span>
            </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

export default AboutModel;
