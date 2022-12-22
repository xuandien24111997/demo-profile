import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./finger-counting-modal.scss";
import Button from "@material-ui/core/Button";
import { DropzoneArea } from "material-ui-dropzone";
import { uploadImage } from "service/admin/uploadFile";

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
  isVisibleModalArea,
  setIsVisibleModal,
  handleClose,
  fingerCountingData,
  setFingerCountingData,
  updateFingerCountingAction,
}) {
  const classes = useStyles();
  const [pictures, setPictures] = useState([]);

  const onSubmit = async () => {
    if (
      fingerCountingData.number > 0 &&
      fingerCountingData.number <= 10 &&
      pictures.length > 0
    ) {
      let picture = pictures.map((picture) => {
        const formDataImg = new FormData();
        formDataImg.append("uploadFile", picture);
        return uploadImageApi(formDataImg);
      });
      setIsVisibleModal(false);

      const groupRes = await Promise.all(picture);
      updateFingerCountingAction({
        id: fingerCountingData._id,
        data: {
          number: parseInt(fingerCountingData.number),
          image: groupRes,
          lang: fingerCountingData.lang._id,
        },
      });
    }
  };

  const uploadImageApi = async (data) => {
    const res = await uploadImage(data);
    if (res && res.status === 200 && res.data) {
      return res.data;
    }
    return "";
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isVisibleModalArea}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isVisibleModalArea}>
        <div className="finger-counting-modal">
          <div className="finger-counting-modal__heading">
            <h2 className="finger-counting-modal__title">
              {!fingerCountingData._id
                ? "New Finger Counting"
                : "Edit Finger Counting"}
            </h2>
          </div>
          <div className="finger-counting-modal__container">
            <div className="finger-counting-modal__container-left">
              <div className="finger-counting-modal__username">
                <span className="finger-counting-modal__text">
                  Number Of Fingers
                </span>
                <input
                  type="number"
                  className="finger-counting-modal__input"
                  onChange={(e) =>
                    setFingerCountingData({
                      ...fingerCountingData,
                      number: e.target.value,
                    })
                  }
                  value={fingerCountingData.number}
                />
                {fingerCountingData.number == "" && (
                  <p className="error-text">Please enter number of fingers !</p>
                )}
                {fingerCountingData.number < 1 ||
                  (fingerCountingData.number > 10 && (
                    <p className="error-text">
                      The number of fingers is not zero and more than 10!
                    </p>
                  ))}
              </div>
            </div>
            <div
              className="finger-counting-modal__container-left"
              style={{ marginTop: 50 }}
            >
              <div className="finger-counting-modal__username">
                <p
                  className="finger-counting-modal__text"
                  style={{ marginBottom: 10 }}
                >
                  Images
                </p>
                <DropzoneArea
                  acceptedFiles={["image/*"]}
                  dropzoneText={"Drag and drop an image here or click"}
                  onChange={(files) => setPictures(files)}
                  filesLimit={2}
                  initialFiles={
                    fingerCountingData.image
                      ? fingerCountingData.image.map((item, index) => {
                          return `http://${item.url}`;
                        })
                      : []
                  }
                />
              </div>
              {pictures.length == 0 && (
                <p
                  className="error-text"
                  style={{ color: "red", marginLeft: 25 }}
                >
                  Please choose photo !
                </p>
              )}
            </div>
          </div>
          <div className="finger-counting-modal__footer">
            <button
              className="finger-counting-modal__btn-cancel"
              onClick={handleClose}
            >
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
              <span>{!fingerCountingData._id ? "Create" : "Save"}</span>
            </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

export default BasketModal;
