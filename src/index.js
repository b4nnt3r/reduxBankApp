import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.css";

import App from "./components/App";
import Baselayout from "./components/BaseLayout";
import UserList from "./containers/UserList";
import UserDetail from "./containers/UserDetail";
import AccountDetails from "./containers/AccountDetails";

const createStoreWithMiddleware = applyMiddleware()(createStore);
ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
    <BrowserRouter>
      <Baselayout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/users/:id/:accountID" component={AccountDetails} />
          <Route path="/users/:id" component={UserDetail} />
          <Route path="/users" component={UserList} />
        </Switch>
      </Baselayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
