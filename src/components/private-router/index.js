import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const PropTye = {
  component: PropTypes.func,
  location: PropTypes.object,
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("authToken") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/admin/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = PropTye;

export { PrivateRoute };
