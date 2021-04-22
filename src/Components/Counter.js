import React from "react";
import { connect } from "react-redux";
import {
  decreaseCounter,
  resetCounter,
  increaseCounter,
  openModalFunc,
} from "../action-variables";

const Counter = (props) => {
  //   const [count, setCount] = React.useState(43);
  const {
    count: num,
    slogan,
    increaseCounter,
    resetCounter,
    decreaseCounter,
    openModalFunc,
  } = props;

  return (
    <section className="counter-box">
      {/* <h2>{count}</h2> */}
      <h2>{num}</h2>
      <h3>{slogan}</h3>
      <div className="btn-box">
        <button className="btn" onClick={decreaseCounter}>
          Decrease
        </button>
        <button
          className="btn"
          onClick={() => {
            resetCounter();
            openModalFunc(
              "You unclocked a Mystery",
              "Your counter will be reset. This is just a notification of this app feature. Continue to have a good time using our app."
            );
          }}
        >
          Reset
        </button>
        <button className="btn" onClick={increaseCounter}>
          Increase
        </button>
      </div>
    </section>
  );
};

// accessing state values in this component
function mapStateToProps({ countState: { count, slogan } }) {
  // return state values
  return {
    count: count,
    slogan: slogan,
  };
}

// accessing dispatch functions / object in this component
const mapDispatchToProps = {
  increaseCounter,
  resetCounter,
  decreaseCounter,
  openModalFunc,
};

/*--------------  OR  --------------*/

// function mapDispatchToProps(dispatch) {
//   // return dispatch types
//   return {
//     increase: () => dispatch(increaseCounter()),
//     reset: () => {
//       dispatch(resetCounter());
//       dispatch(
//         openModalFunc(
//           "You unclocked a Mystery",
//           "Your counter will be reset. This is just a notification of this app feature. Continue to have a good time using our app."
//         )
//       );
//     },
//     decrease: () => dispatch(decreaseCounter()),
//   };
// }

export default connect(mapStateToProps, mapDispatchToProps)(Counter); // provides access to state values
