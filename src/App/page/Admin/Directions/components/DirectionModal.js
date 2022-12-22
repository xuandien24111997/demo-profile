import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./direction-modal.scss";
import Button from "@material-ui/core/Button";
import UploadImage from "components/common/UpImage";
import {
  uploadImage,
  uploadAudio as uploadAudioApi,
} from "service/admin/uploadFile";

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
  direction,
  setDirection,
  picture,
  setPicture,
  updateDirectionAction,
  setPageNumber,
}) {
  const classes = useStyles();
  const uploadAudio = (event, index) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        let audio = document.getElementById("audio" + "-" + index);
        audio.src = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
      let audioInput = [...direction.group];
      audioInput[index] = {
        ...audioInput[index],
        audio: event.target.files[0],
      };
      setDirection({
        ...direction,
        group: [...audioInput],
      });
    }
  };
  const uploadImageReq = async () => {
    const formDataImg = new FormData();
    formDataImg.append("uploadFile", picture.formFile);
    const imageReq = await uploadImage(formDataImg);
    return { image: { ...imageReq.data } };
  };
  const uploadAudioReq = async (audio, index) => {
    const formDataAudio = new FormData();
    formDataAudio.append("uploadFile", audio);
    const audioReq = await uploadAudioApi(formDataAudio);
    return { ...direction.group[index], audio: audioReq.data };
  };
  const onSubmit = async () => {
    let dataUpdate = { ...direction, lang: direction.lang._id };
    if (picture.formFile !== "") {
      const resImage = await uploadImageReq();
      if (resImage !== "")
        dataUpdate = { ...dataUpdate, image: { ...resImage.image } };
    }
    const resAudio = direction.group.map((item, index) => {
      if (item.audio.type === "audio/mpeg") {
        return uploadAudioReq(item.audio, index);
      }
    });
    const groupRes = await Promise.all(resAudio);
    groupRes.forEach((item, index) => {
      if (item) dataUpdate.group[index] = item;
    });
    setIsVisibleModal(false);
    await updateDirectionAction(dataUpdate);
    setPicture({ ...picture, formFile: "" });
    setPageNumber(1);
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
                <div className="col-12">
                  <div className="basket-modal__username">
                    <span className="basket-modal__text">Image *</span>
                    <UploadImage picture={picture} setPicture={setPicture} />
                  </div>
                </div>
              </div>
              {direction.group &&
                direction.group.length > 0 &&
                direction.group.map((item, index) => (
                  <div className="row">
                    <div
                      className="col-12"
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      <h2>Text {index + 1}</h2>
                    </div>
                    <div className="col-12">
                      <div className="basket-modal__username">
                        <span className="basket-modal__text">Audio *</span>
                        {direction.group && (
                          <audio
                            style={{
                              width: "100%",
                              display: "block",
                              marginTop: "2rem",
                            }}
                            id={"audio" + "-" + index}
                            src={
                              item.audio.url
                                ? "http://" + item.audio.url
                                : item.audio
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
                          onChange={(e) => uploadAudio(e, index)}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="basket-modal__username">
                        <span className="basket-modal__text">Word *</span>
                        <input
                          type="text"
                          className="basket-modal__input"
                          onChange={(e) => {
                            let dataInput = [...direction.group];
                            dataInput[index] = {
                              ...dataInput[index],
                              word: e.target.value,
                            };
                            setDirection({
                              ...direction,
                              group: [...dataInput],
                            });
                          }}
                          value={item.word}
                        />
                        {item.word === "" && (
                          <p className="error-text">Please enter Word !</p>
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="basket-modal__username">
                        <span className="basket-modal__text">Spelling *</span>
                        <input
                          type="text"
                          className="basket-modal__input"
                          onChange={(e) => {
                            let dataInput = [...direction.group];
                            dataInput[index] = {
                              ...dataInput[index],
                              spelling: e.target.value,
                            };
                            setDirection({
                              ...direction,
                              group: [...dataInput],
                            });
                          }}
                          value={item.spelling}
                        />
                        {item.spelling === "" && (
                          <p className="error-text">Please enter Spelling !</p>
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="basket-modal__username">
                        <span className="basket-modal__text">Means *</span>
                        <input
                          type="text"
                          className="basket-modal__input"
                          onChange={(e) => {
                            let dataInput = [...direction.group];
                            dataInput[index] = {
                              ...dataInput[index],
                              means: e.target.value,
                            };
                            setDirection({
                              ...direction,
                              group: [...dataInput],
                            });
                          }}
                          value={item.means}
                        />
                        {item.means === "" && (
                          <p className="error-text">Please enter Means !</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
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

export default BasketModal;
