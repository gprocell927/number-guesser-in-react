import React, { Component } from 'react';
import { render } from 'react-dom';

class GuessDisplay extends React.Component {
  render (){
    return (
      <div>
        <p>Your last guess was ...</p>
        <span className="GuessDisplay">Your Guess Here</span>
      </div>
    )
  }
}

module.exports = GuessDisplay;
