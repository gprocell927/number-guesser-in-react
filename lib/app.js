import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SubmitButton from './submit-button.js';
import InputField from './input-field.js';
import ClearButton from './clear-button.js';
import ResetButton from './reset-button.js';
import GuessDisplay from './guess-display.js';
import MessageToUser from './message-to-user.js'


export default class Application extends Component {
  render() {
    return(
      <div>
        <header>
          <h2>Number Guesser In React</h2>
          <GuessDisplay />
          <MessageToUser />
          <InputField />
          <SubmitButton />
          <ClearButton />
          <ResetButton />
        </header>
      </div>
    )
  }
}
