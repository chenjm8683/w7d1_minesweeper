var React = require('react');

var Tile = React.createClass({
  getInitialState: function() {

    return ({
      explored: false,
      flagged: false,
      display: ""
    });
  },

  handleClick: function(e) {
    var tile = this.props.tile;
    if (!tile.explored) {
      if (e.altKey){
        tile.flagged = !tile.flagged;
      } else if (!tile.flagged) {
        tile.explore();
      }

    }
    var bombCount = tile.adjacentBombCount();

  },

  render: function() {
    var tile = this.props.tile;
    var classes = ["tile"];
    if (tile.flagged) {
      classes.push("flagged");
    } else if (tile.explored) {
      alert("explored");
      classes.push("explored");
    }

    return (
      <div
        className={classes.join(" ")}
        onClick={this.handleClick}>
        {this.state.display}
      </div>
    );
  }
});

module.exports = Tile;
