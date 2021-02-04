import React, { Component } from "react";
import Counter from "./counterComponent";
class Counters extends Component {
  render() {
    const {
      counters,
      onIncrement,
      onDescrement,
      onDelete,
      onReset,
    } = this.props;
    return (
      <div>
        <button className="btn btn-primary m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement2={onIncrement}
            onDescremant2={onDescrement}
            onDelete2={onDelete}
          >
            <h4>Counter number {counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
