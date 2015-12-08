var React = require('react');

var Tile = React.createClass({
  getInitialState: function() {
    return ({
      explored: false,
      flagged: false,
      display: "T"
    });
  },

  handleClick: function(e) {
    if (!this.state.explored) {
      this.setState({ explored: true })
    }
  },

  render: function() {

    var bombCount = this.props.tile.adjacentBombCount();
    return (
      <div onClick={this.handleClick}>
        {this.state.display}
      </div>
    );
  }
});

module.exports = Tile;
