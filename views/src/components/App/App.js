import React, { Component } from 'react';

//ROUTER
import { BrowserRouter, Switch, Route } from "react-router-dom";

//REDUX
import { Provider } from "react-redux";
import store from "../../redux";

//Components 
import PennyNav from '../Nav/Nav'
import Home from '../Home/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>      
            <Switch>
              <PennyNav />
              <Route path="/" exact component={Home} />
              {/* <Route path="/card" component={SearchCards} /> */}

            </Switch>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
