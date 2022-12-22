import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./classifides-modal.scss";
import Button from "@material-ui/core/Button";

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
  classifides,
  setClassifides,
  updateClassifiedAction,
  createClassifiedAction,
  setPageNumber,
}) {
  const classes = useStyles();
  const [onValidate, setOnValidate] = useState(false);

  const onUpdate = async () => {
    setOnValidate(true);
    if (classifides.word !== "" && classifides.spelling !== "") {
      setIsVisibleModal(false);
      await updateClassifiedAction({
        id: classifides._id,
        data: {
          word: classifides.word,
          spelling: classifides.spelling,
          description: classifides.description,
          lang: JSON.parse(localStorage.getItem("idLanguage")),
        },
      });
      setPageNumber(1);
      setClassifides({
        word: "",
        spelling: "",
        description: "",
        lang: JSON.parse(localStorage.getItem("idLanguage")),
      });
      setOnValidate(false);
    }
  };
  const onCreate = async () => {
    setOnValidate(true);
    if (classifides.title !== "" && classifides.spelling !== "") {
      setIsVisibleModal(false);
      await createClassifiedAction(classifides);
      setPageNumber(1);
      setClassifides({
        title: "",
        spelling: "",
        description: "",
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
                <div
                  className="col-12"
                  style={{ textAlign: "center", fontWeight: "bold" }}
                ></div>
                <div className="col-12">
                  <div className="basket-modal__username">
                    <span className="basket-modal__text">Word *</span>
                    <input
                      type="text"
                      className="basket-modal__input"
                      onChange={(e) =>
                        setClassifides({
                          ...classifides,
                          word: e.target.value,
                        })
                      }
                      value={classifides.word}
                    />
                    {onValidate && classifides.word === "" && (
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
                      onChange={(e) =>
                        setClassifides({
                          ...classifides,
                          spelling: e.target.value,
                        })
                      }
                      value={classifides.spelling}
                    />
                    {onValidate && classifides.spelling === "" && (
                      <p className="error-text">Please enter Spelling !</p>
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <div className="basket-modal__username">
                    <span className="basket-modal__text">description</span>
                    <textarea
                      type="text"
                      className="basket-modal__input"
                      onChange={(e) =>
                        setClassifides({
                          ...classifides,
                          description: e.target.value,
                        })
                      }
                      value={classifides.description}
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
                if (classifides._id) onUpdate();
                else onCreate();
              }}
            >
              <i className="zmdi zmdi-account-add zmdi-hc-fw" />
              <span>{classifides._id ? "Save" : "Create"}</span>
            </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

export default BasketModal;
