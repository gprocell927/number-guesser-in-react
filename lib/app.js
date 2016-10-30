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
      winningNumber: null,
      errorMessage: '',
    };
    this.resetGame = this.resetGame.bind(this);
  }

  handleInputChange(inputValue) {
    this.setState({ inputValue });
  }

  saveGuess(){
    const guess = parseInt(this.state.inputValue, 10);
    if (isNaN(guess)) {
      this.setState({
        errorMessage:"Your guess was not a valid number"});
    } else {
      this.setState({ guess });
    }
  }

  clearInput(){
    this.setState({
      inputValue: ''});
  }

  resetGame(){
    this.setState({
      inputValue: '',
      guess: null,
      winningNumber: null
    });
  }

  componentDidMount() {
    const randomNumber = Math.floor(Math.random()* (100 - 1) + 1).toString();
    this.setState({winningNumber: randomNumber});
  }

  render() {

    console.log(this.state)
    return(
      <div>
        <header>
          <h2>Number Guesser In React</h2>
          <GuessDisplay
            guess={this.state.guess}
            messageValue={this.state.errorMessage}/>
          <Form
            handleChange={this.handleInputChange.bind(this)}
            clearInput={this.clearInput.bind(this)}
            saveGuess={this.saveGuess.bind(this)}
            inputValue={this.state.inputValue}
          />
          <button
            className="ResetButton"
            children="Reset Game"
            onClick={() => this.resetGame()}
          />
        </header>
      </div>
    )
  }
}
