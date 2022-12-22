import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./language-modal.scss";
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
  isVisibleModalArea,
  setIsVisibleModal,
  handleClose,
  createLanguageAdminAction,
  language,
  setLanguage,
  updateLanguageAction,
}) {
  const classes = useStyles();

  const onSubmit = () => {
    if (language.name) {
      if (!language._id) {
        createLanguageAdminAction(language);
      } else {
        updateLanguageAction(language);
      }
      setIsVisibleModal(false);
    }
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
        <div className="basket-modal">
          <div className="basket-modal__heading">
            <h2 className="basket-modal__title">
              {!language._id ? "New Language" : "Edit Language"}
            </h2>
          </div>
          <div className="basket-modal__container">
            <div className="basket-modal__container-left">
              <div className="basket-modal__username">
                <span className="basket-modal__text">Language Name</span>
                <input
                  type="text"
                  className="basket-modal__input"
                  onChange={(e) =>
                    setLanguage({
                      ...language,
                      name: e.target.value,
                    })
                  }
                  value={language.name}
                />
                {!language.name && (
                  <p className="error-text">Please enter Language Name !</p>
                )}
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
                onSubmit();
              }}
            >
              <i className="zmdi zmdi-account-add zmdi-hc-fw" />
              <span>{!language._id ? "Create" : "Save"}</span>
            </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

export default BasketModal;
