import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/Counters";
class App extends Component {
  state = {
    counters: [
      { id: 0, value: 4 },
      { id: 1, value: -2 },
      { id: 2, value: 1 },
      { id: 3, value: 0 },
    ],
  };

  HandelDelte = (CounterID) => {
    console.log(CounterID);
    const counters = this.state.counters.filter((c) => c.id !== CounterID);
    this.setState({ counters });
  };
  handelReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  HandelIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  HandelDescrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          TotaleNumbers={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handelReset}
            onIncrement={this.HandelIncrement}
            onDescrement={this.HandelDescrement}
            onDelete={this.HandelDelte}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
