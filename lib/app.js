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
      messageToUser: '',
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
      this.evaluateGuess(this.state.guess);
    }
  }

  evaluateGuess(guess){ //will not display in MessageToUser
    if (guess === this.state.winningNumber){
      this.setState({
        messageToUser: "Congratulations! You guessed the random number correctly!"
      });
    } else if (guess > this.state.winningNumber){
      this.setState({
        messageToUser: "Sorry, that guess is too high. Try a lower number."
      });
    } else {
      this.setState({
        messageToUser: "Sorry, that guess is too low. Try a higher number."
      });
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
            messageToUser={this.state.messageToUser}/>
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
