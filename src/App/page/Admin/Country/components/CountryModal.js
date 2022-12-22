import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./language-modal.scss";
import Button from "@material-ui/core/Button";
import Select from "react-select"
import { connect } from "react-redux";

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
  createAction,
  params,
  setParams,
  updateAction,
  listLanguages,
  loading,
}) {
  const classes = useStyles();

  const onSubmit = () => {
    if (params.name) {
      if (!params._id) {
        createAction({ ...params, lang: params.lang.map((eq) => eq._id)});
      } else {
        updateAction(params._id, { ...params, lang: params.lang.map((eq) => eq._id)});
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
              {!params._id ? "New Language" : "Edit Language"}
            </h2>
          </div>
          <div className="basket-modal__container">
            <div className="basket-modal__container-left">
              <div className="basket-modal__username">
                <span className="basket-modal__text">Name</span>
                <input
                  type="text"
                  className="basket-modal__input"
                  onChange={(e) =>
                    setParams((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  value={params.name}
                />
              </div>
            </div>
            <div className="basket-modal__container-left">
              <div className="basket-modal__username">
                <span className="basket-modal__text">Latitude</span>
                <input
                  type="text"
                  className="basket-modal__input"
                  onChange={(e) =>
                    setParams((prev) => ({
                      ...prev,
                      lat: e.target.value,
                    }))
                  }
                  value={params.lat}
                />
              </div>
            </div>
            <div className="basket-modal__container-left">
              <div className="basket-modal__username">
                <span className="basket-modal__text">Longitude</span>
                <input
                  type="text"
                  className="basket-modal__input"
                  onChange={(e) =>
                    setParams((prev) => ({
                      ...prev,
                      lng: e.target.value,
                    }))
                  }
                  value={params.lng}
                />
              </div>
            </div>
            <div className="basket-modal__container-left">
              <div className="basket-modal__username">
                <span className="basket-modal__text">Languages</span>
                <Select
                  isMulti
                  value={params.lang}
                  onChange={(value) => setParams((prev) => ({
                    ...prev,
                    lang: value,
                  }))}
                  options={listLanguages}
                  getOptionLabel={option => option.name}
                  getOptionValue={option => option._id}
                  isLoading={loading}
                />
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
              <span>{!params._id ? "Create" : "Save"}</span>
            </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

const mapStateToProps = (state) => ({
  loading: state.languageRedux.loading,
  listLanguages: state.languageRedux.listLanguages,
});

export default connect(mapStateToProps)(BasketModal);
