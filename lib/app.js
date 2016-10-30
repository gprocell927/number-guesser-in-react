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
      // display error message
      // error is in state
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

  // componentDidMount() {
  //   const randomNumber = (Math.random()* (100 - 1) + 1).toStri;
  //   this.setState({winningNumber: randomNumber});
  // }
  render() {

    console.log(this.state)
    return(
      <div>
        <header>
          <h2>Number Guesser In React</h2>
          <GuessDisplay guess={this.state.guess}/>
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
