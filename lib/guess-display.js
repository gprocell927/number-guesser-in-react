import React, { Component } from 'react';

class GuessDisplay extends React.Component {
  constructor() {
    super();
  }

  render(){
    return (
      <div>
        <p>Your most recent guess was: </p>
      </div>
    );
  }
}

module.exports = GuessDisplay;
