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
    const guess = parseInt(this.state.inputValue, 10).toString();
    this.state.guess = this.state.inputValue;
    this.state.inputValue = '';
    this.evaluateGuess();
    }


  evaluateGuess(){
    const guess = this.state.guess;
    const randomNumber = this.state.winningNumber;
    if (guess === randomNumber){
      this.setState({
        messageToUser: "Congratulations! You guessed the random number correctly!"
      });
    }
    if (guess > randomNumber){
      this.setState({
        messageToUser: "Sorry, that guess is too high. Try a lower number."
      });
    }
    if (guess < randomNumber) {
      this.setState({
        messageToUser: "Sorry, that guess is too low. Try a higher number."
      });
    }
    if (isNaN(guess)){
      this.setState({
        messageToUser:"Your guess was not a valid number"});
    }
  }

  clearInput(){
    this.setState({
      inputValue: ''});
  }

  resetGame(){
    const newRandomNumber = Math.floor(Math.random()* (100 - 1) + 1).toString();
    this.setState({
      inputValue: '',
      guess: null,
      winningNumber: newRandomNumber
    });
  }

  componentDidMount() {
    const randomNumber = Math.floor(Math.random()* (100 - 1) + 1).toString();
    this.setState({winningNumber: randomNumber});
  }

  render() {
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
            disabled={!this.state.guess}
            onClick={() => this.resetGame()}
          />
        </header>
      </div>
    )
  }
}
