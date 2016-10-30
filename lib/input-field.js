import React, { Component } from 'react';
import { render } from 'react-dom';

class InputField extends React.Component {
  render () {
    return (
      <div>
        <input className="InputField" type="Number" placeholder="Enter a number">
        </input>
      </div>
    )
  }
}
module.exports = InputField;
