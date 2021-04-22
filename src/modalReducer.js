import { OPEN_MODAL, CLOSE_MODAL } from "./action-variables";

// init defaultState
const defaultState = {
  isModalOpen: false,
  name: "",
  text: "",
};

// reducer function
function reducer(state = defaultState, action) {
  // set up if statements
  if (action.type === OPEN_MODAL) {
    return {
      ...state,
      isModalOpen: true,
      name: action.payload.name,
      text: action.payload.text,
    };
  }

  if (action.type === CLOSE_MODAL) {
    return {
      ...state,
      isModalOpen: false,
      name: "",
      text: "",
    };
  }

  return state;
}

export default reducer;
