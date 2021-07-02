import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import Profile from '../pages/profile';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Dashboard} />
        <Route path="/profile" component={Profile} />
        {/* Not Found */}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;