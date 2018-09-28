import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';

//ROUTER
import { BrowserRouter, Switch, Route } from "react-router-dom";

//REDUX
import { Provider } from "react-redux";
import store from "./redux";

//Components & CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';
import './index.css';

render(
  <BrowserRouter>
    <Provider store={store}>      
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/chat" component={Chat} />
        <Route path="/login" component={Login} />
      </Switch>
    </Provider>
  </BrowserRouter>
  , document.getElementById('root'));
