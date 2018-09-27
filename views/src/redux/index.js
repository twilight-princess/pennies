import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const initialState = {
  loading: false,
  currentUser: {
    username: ''
  },
  messages: [],
  loggedIn: false
}

const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "START_LOADING":
      return {
        ...prevState,
        loading: true
      }
    case "SAVE_MESSAGE_HISTORY":
      return {
        ...prevState,
        messages: [...prevState.messages, action.message],
        loading: false
      }
    default:
      return prevState
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

//ACTION CREATORS

export const saveMessageHistory = (message) => {
  return dispatch => {
    store.dispatch({
      type: "SAVE_MESSAGE_HISTORY",
      message: message
    })
  }
}

export default store;