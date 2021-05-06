import "./App.css";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";
import { NavLink, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import { useEffect } from "react";
import productApi from "./api/productApi";
import CounterFeature from "./features/Counter";

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <h2> Home Page</h2>
      <p>
        <NavLink to='/todos' activeClassName='active-menu'>
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to='/albums' activeClassName='active-menu'>
          Album
        </NavLink>
      </p>
      <Switch>
        <Route path='/' component={CounterFeature} exact />
        <Route path='/todos' component={TodoFeature} exact />
        <Route path='/albums' component={AlbumFeature} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
