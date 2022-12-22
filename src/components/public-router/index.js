import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

const PropTye = {
  component: PropTypes.func,
  location: PropTypes.object,
};

const PublicRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

PublicRoute.propTypes = PropTye;

export { PublicRoute };
