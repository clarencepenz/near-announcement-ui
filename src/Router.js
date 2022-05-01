import { HashRouter, Switch, Route } from "react-router-dom";
import Announcements from "./pages/Announcements";
import Home from "./pages/Home";

const Router = ({ logout, login }) => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} logout={logout} login={login} />}
        />
        <Route
          path="/announcements"
          render={(props) => <Announcements {...props} logout={logout} />}
        />
      </Switch>
    </HashRouter>
  );
};

export default Router;
