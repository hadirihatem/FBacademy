import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivetRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        !auth.isAuth ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

export default PrivetRoute;
