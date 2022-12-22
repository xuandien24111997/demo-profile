import "./login-style.scss";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const Login = ({ login, loading }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisiblity = (e) => {
    e.preventDefault();
    setPasswordShown(passwordShown ? false : true);
  };

  const handleLogin = async () => {
    await login({ email, password, history });
  };

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <div className="div-login">
      <div className="login">
        <div className="logo">
          <img
            className="logo__image"
            alt=""
            src={require("assets/images/logo.png").default}
          />
        </div>
        <div>
          <div className="login__form">
            <div className="form__control">
              <label className="form__label">Username / Email</label>
              <input
                className="form__input"
                type="text"
                onChange={(event) => setEmail(event.target.value)}
              />
              {email && !validateEmail(email) && (
                <h4
                  style={{
                    color: "red",
                    marginTop: 10,
                    paddingLeft: "5px",
                  }}
                >
                  Email address is not valid.
                </h4>
              )}
            </div>
            <div className="form__control">
              <label className="form__label">Password</label>
              <input
                onChange={(event) => setPassword(event.target.value)}
                className="form__input"
                type={passwordShown ? "text" : "password"}
              />
              <img
                className="form__show"
                alt=""
                onClick={togglePasswordVisiblity}
                src={require("assets/images/showpass.svg").default}
              />
            </div>
            <div className="form__control">
              <Button
                className="form__button"
                onClick={() => {
                  handleLogin();
                }}
                disabled={
                  loading ||
                  password === "" ||
                  email === "" ||
                  !validateEmail(email)
                }
              >
                Login
              </Button>
            </div>
            {loading && (
              <div className="loader-view">
                <CircularProgress />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  const { loginAdminAction } = require("redux/UserRedux");
  return {
    login: (data) => dispatch(loginAdminAction(data)),
  };
};

const mapStateToProps = (state) => ({
  loading: state.user.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
