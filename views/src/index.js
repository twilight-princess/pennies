import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';

//ROUTER
import { BrowserRouter, Switch, Route } from "react-router-dom";

//REDUX
import { Provider } from "react-redux";
import store from "./redux";

//Components & CSS
import Home from './components/Home/Home';
import Chat from './components/Chat/Chat';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

render(
  <BrowserRouter>
    <Provider store={store}>      
      <Switch>
        <App />
        <Route path="/" exact component={Home} />
        <Route path="/chat" component={Chat} />
      </Switch>
    </Provider>
  </BrowserRouter>
  , document.getElementById('root'));
