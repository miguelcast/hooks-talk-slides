import React, { Component } from 'react'
import "./styles.css";

export default class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      count: this.state.count + 1
    })
  }

  render(){
    const { count } = this.state;
    return(
      <div className="counter-wrapper">
        <p>You have clicked {count} times</p>
        <button onClick={this.handleClick}>
          Click
        </button>
      </div>
    )
  }
}