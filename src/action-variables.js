// counter actions
const DECREASE = "DECREASE";
const RESET = "RESET";
const INCREASE = "INCREASE";

export { DECREASE, RESET, INCREASE };

// modal actions
const OPEN_MODAL = "OPEN_MODAL";
const CLOSE_MODAL = "CLOSE_MODAL";

export { OPEN_MODAL, CLOSE_MODAL };

// product actions
const SET_LOADING = "SET_LOADING";
const GET_PRODUCTS = "GET_PRODUCTS";

export { SET_LOADING, GET_PRODUCTS };

// action creators
function decreaseCounter() {
  return { type: DECREASE };
}

function resetCounter() {
  return { type: RESET };
}

function increaseCounter() {
  return { type: INCREASE };
}

function openModalFunc(name, text) {
  return {
    type: OPEN_MODAL,
    payload: {
      name,
      text,
    },
  };
}

export { decreaseCounter, resetCounter, increaseCounter, openModalFunc };
