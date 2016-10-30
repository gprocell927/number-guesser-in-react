import React, { Component } from 'react';
import { render } from 'react-dom';

class ClearButton extends React.Component {
  render () {
    return(
      <div>
        <button className="clearButton">
          <span>Clear</span>
        </button>
      </div>
    )
  }
}

module.exports = ClearButton;
