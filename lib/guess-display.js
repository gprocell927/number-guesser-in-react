import React, { Component } from 'react';
import { render } from 'react-dom';

class GuessDisplay extends React.Component {
  render (){
    if (this.props.guess === null){
      return null;
    }
    return (
      <div className="displayStuff">
        <p className="yourGuessWas">Your last guess was ...</p>
        <span className="GuessDisplay">{this.props.guess}</span>
        <span
        className="MessageToUser">
        {this.props.messageToUser}
        </span>
      </div>
    )
  }
}

module.exports = GuessDisplay;
