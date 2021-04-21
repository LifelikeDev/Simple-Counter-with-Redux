import { DECREASE, RESET, INCREASE } from "./action-variables";

// defaultState definition
const defaultState = {
  count: 58,
  slogan: "shake and bake",
};

// Reducer setup
function reducer(state = defaultState, action) {
  switch (action.type) {
    case DECREASE:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    case INCREASE:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

export default reducer;
