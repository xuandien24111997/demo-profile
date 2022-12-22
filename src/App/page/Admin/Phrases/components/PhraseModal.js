import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./phrase-modal.scss";
import Button from "@material-ui/core/Button";
import { uploadAudio as uploadAudioApi } from "service/admin/uploadFile";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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
  phrases,
  setPhrases,
  updatePhrasesAction,
  createPhrasesAction,
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
    if (
      phrases.word !== "" &&
      phrases.spelling !== "" &&
      phrases.means !== ""
    ) {
      let dataUpdate = { ...phrases };
      if (audio.formFile !== "") {
        const resAudio = await uploadAudioReq();
        dataUpdate = { ...dataUpdate, audio: { ...resAudio } };
      }
      setIsVisibleModal(false);
      await updatePhrasesAction(dataUpdate);
      setAudio({ formFile: "" });
      setPageNumber(1);
      setPhrases({
        word: "",
        spelling: "",
        means: "",
        note:"",
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
      phrases.word !== "" &&
      phrases.spelling !== "" &&
      phrases.means !== "" &&
      audio.formFile !== ""
    ) {
      let dataCreate = { ...phrases };
      const resAudio = await uploadAudioReq();
      dataCreate = { ...dataCreate, audio: { ...resAudio } };
      setIsVisibleModal(false);
      await createPhrasesAction(dataCreate);
      setAudio({ formFile: "" });
      setPageNumber(1);
      setPhrases({
        word: "",
        spelling: "",
        means: "",
        note:"",
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

  const editorConfiguration = {
    toolbar: {
      items: [
          'heading', '|',
          'fontfamily', 'fontsize', '|',
          'alignment', '|',
          'fontColor', 'fontBackgroundColor', '|',
          'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
          'link', '|',
          'outdent', 'indent', '|',
          'bulletedList', 'numberedList', 'todoList', '|',
          'code', 'codeBlock', '|',
          'undo', 'redo'
      ],
      
      shouldNotGroupWhenFull: true
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
                        phrases.audio.url !== ""
                          ? "http://" + phrases.audio.url
                          : phrases.audio.url
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
                    <span className="basket-modal__text">Phrases in English *</span>
                    <input
                      type="text"
                      className="basket-modal__input"
                      onChange={(e) =>
                        setPhrases({
                          ...phrases,
                          means: e.target.value,
                        })
                      }
                      value={phrases.means}
                    />
                    {onValidate && phrases.means === "" && (
                      <p className="error-text">Please enter Phrase in English!</p>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <div className="basket-modal__username">
                    <span className="basket-modal__text">Orthography 1 *</span>
                    <input
                      type="text"
                      className="basket-modal__input"
                      onChange={(e) =>
                        setPhrases({
                          ...phrases,
                          spelling: e.target.value,
                        })
                      }
                      value={phrases.spelling}
                    />
                    {onValidate && phrases.spelling === "" && (
                      <p className="error-text">Please enter Orthography 1!</p>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <div className="basket-modal__username">
                    <span className="basket-modal__text">Orthography 2 *</span>
                    <input
                      type="text"
                      className="basket-modal__input"
                      onChange={(e) =>
                        setPhrases({
                          ...phrases,
                          word: e.target.value,
                        })
                      }
                      value={phrases.word}
                    />
                    {onValidate && phrases.word === "" && (
                      <p className="error-text">Please enter Orthography 2!</p>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <div className="App">
                    <p>Note :</p>
                    <CKEditor
                     data={phrases.note}
                      editor={ClassicEditor}
                      onReady={(editor) => {
                        console.log("Editor is ready to use!", editor);
                      }}
                      config={ editorConfiguration }
                      onChange={ ( event, editor ) => {
                        setPhrases({
                          ...phrases,
                          note: editor.getData(),
                        })
                    } }
                    />
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
                if (phrases._id) onUpdate();
                else onCreate();
              }}
            >
              <i className="zmdi zmdi-account-add zmdi-hc-fw" />
              <span>{phrases._id ? "Save" : "Create"}</span>
            </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

export default BasketModal;
