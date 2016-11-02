import React, { Component } from 'react';
import { render } from 'react-dom';

class UserRange extends React.component {
    constructor(props){
      super(props);
      }

      render () {
      return (
        <form>
          <input
            className="userMin"
            type="Number"
            placeholder="Min"
            />
          <p
            className="to"
            children="to"
          />
          <input
            className="userMax"
            type="Number"
            placeholder="Max"
            />
          <button
            className="rangeSubmitButton"
            children="Submit Range"
          />
        </form>
      )
    }
  }

module.exports = UserRange;
