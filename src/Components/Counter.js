import React from "react";
import { connect } from "react-redux";
import { DECREASE, RESET, INCREASE } from "../action-variables";

const Counter = (props) => {
  //   const [count, setCount] = React.useState(43);
  const { count: num, slogan, increase, reset, decrease } = props;

  return (
    <section className="counter-box">
      {/* <h2>{count}</h2> */}
      <h2>{num}</h2>
      <h3>{slogan}</h3>
      <div className="btn-box">
        <button className="btn" onClick={decrease}>
          Decrease
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
        <button className="btn" onClick={increase}>
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

// accessing dispatch functions in this component
function mapDispatchToProps(dispatch, ownProps) {
  console.log({ ownProps });

  // return dispatch types
  return {
    increase: () => dispatch({ type: INCREASE }),
    reset: () => dispatch({ type: RESET }),
    decrease: () => dispatch({ type: DECREASE }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter); // provides access to state values
