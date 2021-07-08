import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "../pages/auth/login";
import Booking from "../pages/booking";
import Dashboard from "../pages/dashboard";
import Facility from "../pages/facility";
import Profile from "../pages/profile";
import User from "../pages/user";
import PrivateRoute from "../helpers/PrivateRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/facility" component={Facility} />
        <PrivateRoute exact path="/booking" component={Booking} />
        <PrivateRoute exact path="/user" component={User} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <Route exact path="/auth/login" component={Login} />
        {/* Not Found */}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
