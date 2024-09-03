// !UseEffect after render
import React, { Component } from 'react';

class UseEffectClass extends Component {
    constructor(props) {
      super(props)
      this.state = {
         count : 0
      }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count}`
    }
    componentDidUpdate() {
        document.title = `Clicked ${this.state.count}`
    }
  render() {
    return (
      <div>
        <h1>UseEffect after render</h1>
      </div>
    );
  }
}

export default UseEffectClass;
