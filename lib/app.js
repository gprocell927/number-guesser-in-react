import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './form.js';
import GuessDisplay from './guess-display.js';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      guess: null,
    };
  }

  handleInputChange(inputValue) {
    this.setState({ inputValue })
    console.log(this.state.inputValue)
  }

  render() {
    return (
      <div>
        <header>
          <h2>Number Guesser In React</h2>
          <GuessDisplay />
          <Form
            handleChange = {this.handleInputChange()}
            saveGuess = {() => this.saveGuess()}
          />
        </header>
      </div>
    );
  }
}
