import React, { Component } from 'react';

class SubmitButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <button className="SubmitButton" onClick={this.props.handleClick}>
          <span>Submit</span>
        </button>
      </div>
          )
        }
      }

module.exports = SubmitButton;
