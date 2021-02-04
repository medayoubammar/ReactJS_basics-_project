import React, { Component } from "react";

export default class Counter extends Component {
  // we deleted all the locale state << ep 49 >> to create a controlled component
  /* state = {
    value: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3", "tag4"],
  };
we deltetd this state propertie when we want to remove the local state  */
  /* increment = () => {
    this.setState({ value: this.state.value + 1 });
  };

  descrement = () => {
    this.setState({ value: this.state.value - 1 });
  };
*/
  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.colorBadgeClass()}>{this.formatCounter()}</span>
        <button
          onClick={() => this.props.onIncrement2(this.props.counter)}
          className="btn btn-dark"
        >
          +
        </button>

        <button
          onClick={() => this.props.onDescremant2(this.props.counter)}
          className="btn btn-dark m-2"
          disabled={this.props.counter.value === 0 ? "disabled" : ""}
        >
          -
        </button>
        <button
          /*onClick={this.props.onDelete}   5)HAndelMethods.txt */ onClick={() =>
            this.props.onDelete2(this.props.counter.id)
          }
          className="btn btn-danger m-2"
        >
          X
        </button>

        <hr></hr>
      </div>
    );
  }
  colorBadgeClass() {
    let classes = "badge m-2 badge-";

    classes +=
      this.props.counter.value < 0
        ? "danger"
        : (classes += this.props.counter.value === 0 ? "warning" : "primary");
    return classes;
  }

  formatCounter() {
    const { value: count } = this.props.counter;
    return count === 0 ? "zero" : count;
  }
}
