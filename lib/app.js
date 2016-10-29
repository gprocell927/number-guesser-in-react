import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SubmitButton from './submit-button.js';
import InputField from './input-field.js'


export default class Application extends Component {
  render() {
    return(
      <div>
        <header>
          <h2>Number Guesser In React</h2>
          <InputField />
          <SubmitButton />
        </header>
      </div>
    )
  }
}
