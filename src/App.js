// component and variable imports
import React from "react";
import Counter from "./Components/Counter";
// import { DECREASE, RESET, INCREASE } from "./action-variables";

// redux and react-redux imports
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

// reducers imports
import countReducer from "./countReducer";
import modalReducer from "./modalReducer";
import productReducer from "./productReducer";

// // init defaultState
// const defaultState = {
//   count: 58,
//   slogan: "shake and bake",
// };

// Store setup
const store = createStore(
  /* Combining reducers with the combineReducers function  */
  combineReducers({
    countState: countReducer,
    modalState: modalReducer,
    productState: productReducer,
  }),
  composeWithDevTools()
);

// App component
const App = () => {
  return (
    <main className="wrapper">
      <h1>Simple Counter</h1>
      <Provider store={store}>
        <Counter oddThing={{ boys: "gossips" }} />
      </Provider>
    </main>
  );
};

export default App;
