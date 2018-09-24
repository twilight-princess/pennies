import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const initialState = {
  loading: false,
  currentUser: {
    username: ''
  },
  loggedIn: false
}

const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "START_LOADING":
      return {
        ...prevState,
        loading: true
      }
    default:
      return prevState
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

store.describe(() => console.log(store.getState()));

//ACTION CREATORS



export default store;