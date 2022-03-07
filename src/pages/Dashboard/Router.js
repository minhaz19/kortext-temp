import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';
import Summary from '../Dashboard/Orders/Summary';
import CreateProduct from './Products/CreateProduct';
import AllOrder from "./AllOrders"
import OrderSummary from "./Orders/Summary";
import AllProducts from "./AllProducts"
import CreateOrder from './Orders/CreateOrder';
import Categories from './Products/Categories';
import Calender from './Calender';
import General from './Settings/General';
import Account from './Settings/Account';
import Fulfilment from "./Settings/Fulfilment";
import DashboardPage from './DashboardPage';
import UpdateProduct from './Products/UpdateProduct';
import Stock from './ProductsStock'

const Router = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}/summary`}>
        <Summary />
      </Route>

      <Route exact path={`${path}/createproduct`}>
        <CreateProduct />
      </Route>
      <Route exact path={`${path}/updateproduct/:productId`}>
        <UpdateProduct />
      </Route>
      <Route exact path={`${path}/categories`}>
        <Categories />
      </Route>

      <Route exact path={`${path}/allOrder`}>
        <AllOrder />
      </Route>

      <Route exact path={`${path}/allProducts`}>
        <AllProducts />
      </Route>

      <Route exact path={`${path}/orderSummary`}>
        <OrderSummary />
      </Route>

      <Route exact path={`${path}/calender`}>
        <Calender />
      </Route>
      <Route exact path={`${path}/createorder`}>
        <CreateOrder />
      </Route>

      <Route exact path={`${path}/general`}>
        <General />
      </Route>

      <Route exact path={`${path}/fulfilment`}>
        <Fulfilment />
      </Route>
      <Route exact path={`${path}/account`}>
        <Account />
      </Route>
      <Route exact path={`${path}/stocks`}>
        <Stock />
      </Route>
      <Route exact path={`${path}`}>
        <DashboardPage />
      </Route>

    </Switch>
  );
};

export default Router;
