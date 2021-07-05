import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "../pages/auth/login";
import Booking from "../pages/booking";
import Dashboard from "../pages/dashboard";
import Facility from "../pages/facility";
import Profile from "../pages/profile";
import User from "../pages/user";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Dashboard} />
        <Route path="/facility" component={Facility} />
        <Route path="/booking" component={Booking} />
        <Route path="/user" component={User} />
        <Route path="/profile" component={Profile} />
        <Route path="/auth/login" component={Login} />
        {/* Not Found */}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
