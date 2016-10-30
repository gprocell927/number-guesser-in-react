import React, { Component } from 'react';
import { render } from 'react-dom';

class ResetButton extends React.Component {
  render () {
    return (
      <div>
        <button className="ResetButton">
          <span>Reset Game</span>
        </button>
      </div>
    )
  }
}

module.exports = ResetButton;
