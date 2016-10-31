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
    this.setState({ guess });
    this.evaluateGuess();
    }


  evaluateGuess(){
    if (this.state.guess == this.state.winningNumber){
      this.setState({
        messageToUser: "Congratulations! You guessed the random number correctly!"
      });
    } else if (this.state.guess > this.state.winningNumber){
      this.setState({
        messageToUser: "Sorry, that guess is too high. Try a lower number."
      });
    } else if (this.state.guess < this.state.winningNumber) {
      this.setState({
        messageToUser: "Sorry, that guess is too low. Try a higher number."
      });
    } else {
      this.setState({
        messageToUser:"Your guess was not a valid number"});
    }
  }

  clearInput(){
    this.setState({
      inputValue: ''});
  }

  resetGame(){
    const randomNumber = Math.floor(Math.random()* (100 - 1) + 1).toString();
    this.setState({
      inputValue: '',
      guess: null,
      winningNumber: randomNumber
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
            disabled={!this.state.inputValue}
          />
          <button
            className="ResetButton"
            children="Reset Game"
            disabled={!this.state.inputValue}
            onClick={() => this.resetGame()}
          />
        </header>
      </div>
    )
  }
}
