import React, { Component } from 'react';
import { render } from 'react-dom';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <form
        onSubmit={(e)=>{e.preventDefault();this.props.saveGuess(e.target.value)}}
      >
        <input
          placeholder="Enter your guess"
          type="Number"
          onClick={this.props.handleChange}
        />
        <button
          children="Submit"
        />
        <button
          children="Clear"
        />
        <button
          children="Reset"
        />
      </form>
    );
  }
}

module.exports = Form;
