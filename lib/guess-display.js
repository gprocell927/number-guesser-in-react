import React, { Component } from 'react';
import { render } from 'react-dom';

class GuessDisplay extends React.Component {
  render (){
    console.log(this.props.guess)
    if (this.props.guess === null){
      return null;
    }
    return (
      <div>
        <p>Your last guess was ...</p>
        <span className="GuessDisplay">{this.props.guess}</span>
        <span className="MessageToUser">Message Goes Here</span>
      </div>
    )
  }
}

module.exports = GuessDisplay;
