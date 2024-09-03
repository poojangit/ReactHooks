import React, { Component } from 'react';

class ClassCounter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    incrementCount = () => {
        this.setState ({
          count : this.state.count + 1
        })
    }

    decrementCount = () => {
      this.setState ({
        count: this.state.count - 1
      })
    }

    reset = () => {
      this.setState({
        count : 0
      })
    }
    
  render() {
    return (
      <div>
        <h1>Class Based - without using hooks</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default ClassCounter;
