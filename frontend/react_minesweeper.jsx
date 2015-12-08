var React = require('react');
var ReactDOM = require('react-dom');
var Game = require('./components/game.jsx')

var MineSweeper = React.createClass({
  render: function () {
    return(
      <Game />
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MineSweeper />, document.getElementById('minesweeper'));
});
