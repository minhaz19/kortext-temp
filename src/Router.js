import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Career from "./pages/Career";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgotPassword";
import CreateShops from "./pages/CreateShops";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import AllOrder from "./pages/Dashboard/AllOrders";
import ChangePassword from "./pages/ChangePassword";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/career"}>
        <Career />
      </Route>

      <Route path={"/create"}>
        <CreateShops />
      </Route>
      <Route exact path={"/login"}>
        <Login />
      </Route>

      <Route exact path={"/forgetPassword"}>
        <ForgetPassword />
      </Route>

      <Route exact path={"/reset-password"}>
        <ChangePassword />
      </Route>

      <Route path={"/dashboard"}>
        <DashboardHome />
      </Route>

      <Route path={"/allorder"}>
        <AllOrder />
      </Route>

      <Route key={2} exact path={"/"}>
        <Homepage />
      </Route>

      <Route path={"*"}>
        <div className="h-screen w-screen flex justify-center items-center text-xl font-bold text-gray-400">
          404 Page Not Found!
        </div>
      </Route>
    </Switch>
  );
};

export default Router;
