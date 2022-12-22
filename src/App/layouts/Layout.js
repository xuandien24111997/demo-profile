import React, { useEffect  } from "react";
import {
  Route,
  Switch,
} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { PrivateRoute } from "components/private-router";
import { PublicRoute } from "components/public-router";
import DashboardAdminLayout from "./DashboardAdminLayout";
import DashboardRouters from "./DashboardRouters";
import Loggin from "App/page/login/Login";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    setTimeout(() => document.documentElement.scrollTo(0, 0), 5);
    setTimeout(() => document.documentElement.style.scrollBehavior = 'smooth', 5)
  }, [pathname]);

  return (
    <div className="main">
      <div className="main__header"></div>

      <Switch>
        <Route path="/admin/login" exact component={Loggin} />
        <PrivateRoute path="/admin" component={DashboardAdminLayout} />
        <PublicRoute path="/" component={DashboardRouters} />
      </Switch>
    </div>
  );
};

export default Layout;
