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
          placeholder="Enter a number"
          min = "1"
          max = "100"
          value={this.props.inputValue}
          onChange={(e) => this.props.handleChange(e.target.value)}
        />
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
