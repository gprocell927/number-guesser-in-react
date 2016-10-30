import React, { Component } from 'react';
import { render } from 'react-dom';

class Form
 extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <form onSubmit={(e)=>{e.preventDefault(); this.props.saveGuess()}}>
        <input
          className="inputField"
          type="Number"
          placeholder="Enter a number"
          value={this.props.inputValue}
          onChange={(e) => this.props.handleChange(e.target.value)}
        />
        <button className="clearButton" children= "Clear" onClick={() => this.props.clearInput()} />
        <button className="SubmitButton" type="Submit" children="Submit" />
      </form>
    )
  }
}
module.exports = Form
;