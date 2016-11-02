import React, { Component } from 'react';
import { render } from 'react-dom';

class Form
 extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <form onSubmit={(e)=>{e.preventDefault(); this.props.saveGuess(e.target.value)}}>
        <input
          className="inputField"
          type="Number"
          min = "1"
          max = "100"
          placeholder="Enter a number"
          value={this.props.inputValue}
          onChange={(e) => this.props.handleChange(e.target.value)}
        />
        <h3>Enter your best guess between 1 and 100</h3>
        <button
        className="SubmitButton"
        type="Submit"
        disabled={!this.props.inputValue}
        children="Submit" />
        <button
          className="clearButton"
          children= "Clear"
          disabled={!this.props.inputValue}
          onClick={() => this.props.clearInput()} />
      </form>
    )
  }
}
module.exports = Form
;
