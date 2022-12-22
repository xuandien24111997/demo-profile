import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./hand-modal.scss";
import Button from "@material-ui/core/Button";
import { uploadImage as uploadImageApi } from "service/admin/uploadFile";
import UploadImage from "components/common/UpImage";

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
  hand,
  setHand,
  updateHandAction,
  createHandAction,
  setPageNumber,
  image,
  setImage,
}) {
  const classes = useStyles();
  const [onValidate, setOnValidate] = useState(false);
  const uploadImageReq = async () => {
    const formDataImg = new FormData();
    formDataImg.append("uploadFile", image.formFile);
    const imageReq = await uploadImageApi(formDataImg);
    return imageReq.data;
  };
  const onUpdate = async () => {
    setOnValidate(true);
    if (hand.title !== "" && hand.question !== "") {
      let dataUpdate = { ...hand };
      if (image.formFile !== "") {
        const resImage = await uploadImageReq();
        dataUpdate = { ...dataUpdate, image: { ...resImage } };
      }
      setIsVisibleModal(false);
      await updateHandAction(dataUpdate);
      setImage({ ...image, formFile: "" });
      setPageNumber(1);
      setHand({
        title: "",
        question: "",
        note: "",
        image: {
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
    if (hand.title !== "" && hand.question !== "" && image.formFile !== "") {
      let dataCreate = { ...hand };
      const resImage = await uploadImageReq();
      dataCreate = { ...dataCreate, image: { ...resImage } };
      setIsVisibleModal(false);
      await createHandAction(dataCreate);
      setImage({ ...image, formFile: "" });
      setPageNumber(1);
      setHand({
        title: "",
        question: "",
        note: "",
        image: {
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
            <h2 className="basket-modal__title">Edit Time</h2>
          </div>
          <div className="basket-modal__container">
            <div className="basket-modal__container-left">
              <div className="row">
                <div className="col-12">
                  <div className="basket-modal__username">
                    <span className="basket-modal__text">Image *</span>
                    <UploadImage picture={image} setPicture={setImage} />
                  </div>
                </div>
                <div
                  className="col-12"
                  style={{ textAlign: "center", fontWeight: "bold" }}
                ></div>
                <div className="col-12">
                  <div className="basket-modal__username">
                    <span className="basket-modal__text">Title *</span>
                    <input
                      type="text"
                      className="basket-modal__input"
                      onChange={(e) =>
                        setHand({
                          ...hand,
                          title: e.target.value,
                        })
                      }
                      value={hand.title}
                    />
                    {onValidate && hand.title === "" && (
                      <p className="error-text">Please enter Title !</p>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <div className="basket-modal__username">
                    <span className="basket-modal__text">How to use ? *</span>
                    <textarea
                      type="text"
                      className="basket-modal__input"
                      onChange={(e) =>
                        setHand({
                          ...hand,
                          question: e.target.value,
                        })
                      }
                      value={hand.question}
                    />
                    {onValidate && hand.question === "" && (
                      <p className="error-text">Please enter How to use ? !</p>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <div className="basket-modal__username">
                    <span className="basket-modal__text">Notes</span>
                    <textarea
                      type="text"
                      className="basket-modal__input"
                      onChange={(e) =>
                        setHand({
                          ...hand,
                          note: e.target.value,
                        })
                      }
                      value={hand.note}
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
                if (hand._id) onUpdate();
                else onCreate();
              }}
            >
              <i className="zmdi zmdi-account-add zmdi-hc-fw" />
              <span>{hand._id ? "Save" : "Create"}</span>
            </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

export default BasketModal;
