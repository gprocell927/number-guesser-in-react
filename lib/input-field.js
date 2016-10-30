import React, { Component } from 'react';
import { render } from 'react-dom';

class InputField extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div>
        <input
          className="InputField"
          type="Number"
          placeholder="Enter a number"
          onChange={(e) => this.props.handleChange(e)} />
      </div>
    )
  }
}
module.exports = InputField;
