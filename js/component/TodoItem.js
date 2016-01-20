var React = require('react');
var ReactPropTypes = React.PropTypes;


var TodoItem = React.createClass({


  // Sometime needs recompile
  render: function() {
    var todo = this.props.todo;


    return (
      <li id="todoItem">
        <div className="view">
          <input type="checkbox"/>
          bla
        </div>  
      </li>     
    );
  }

});


module.exports = TodoItem;
