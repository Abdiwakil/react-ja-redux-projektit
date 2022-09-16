import React, { Component } from 'react';
import './Apuvalineet.css';
import './App.css';

class Button extends Component {
  render() {
    return(
        <div style={ { backgroundColor: this.props.active ? this.props.activeColor : this.props.buttonColor }} className={"button" + (this.props.active ? " active" : "") }  onClick={ this.props.clickHandler }>
          { this.props.label }</div>
    );
  }
}

Button.defaultProps = {
  activeColor: 'white'
}

class Gameover extends Component {
  render() {
    const score = this.props.scoreCallback();

    return(
      <div id="overlay">
        <div id="gameover">Your score: <br/>{score}
        <button id="startgame" onClick={ this.props.startCallback }>New Game</button></div>
      </div>
    );

  }
}

class Score extends Component { this
  render() {
    return(
      <div id="score-container">Score: { this.props.score }</div>
    );
  }
}

export {Button, Gameover, Score}