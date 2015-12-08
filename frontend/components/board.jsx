var React = require('react');
var Tile = require('./tile.jsx');

var Board = React.createClass({
  render: function() {
    var grid = this.props.board.grid;
    var updateGame = this.props.updateGame;
    return (

      <div>
        {grid.map(function(row, idx1){
          return (
              <div key={"row-" + idx1}>
                {row.map(function(t, idx2){
                    return (
                      <Tile
                        key={idx1 + "-" +idx2}
                        tile={grid[idx1][idx2]}
                        updateGame={updateGame}
                      />

                      )
                    }
                  )
                }
              </div>

            );
          })
        }
      </div>

    );
  }
});

module.exports = Board;
