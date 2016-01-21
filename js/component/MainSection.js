var React = require('react');
var ReactPropTypes = React.PropTypes;
var TodoAction = require("../action/TodoAction.js");
var TodoItem = require("./TodoItem.js");

var MainSection = React.createClass({

  propTypes: {
    todos: ReactPropTypes.object.isRequired,
    all_completed: ReactPropTypes.bool.isRequired
  },

  render: function() {
    if(Object.keys(this.props.todos).length < 1) {
      return null;
    }

    var local_todos = []; 
    var todos = this.props.todos;
   
    for(var key in todos) { 
      local_todos.push(<TodoItem key={key} todo={todos[key]} />);
    }

    return (
      <section id="main">
        <p>MainSection</p>
        <p>
          All complete?:
          <input 
            type="checkbox" 
            id="toggle-all"
            onChange={this.on_toggle_complete_all} // component fires action
            checked={this.props.all_completed ? 'checked' : ''}
          />
        </p>

        <ul id="todo-list">
          {local_todos}
        </ul>
      </section>
    );
  },

  on_toggle_complete_all: function() {
    TodoAction.toggleCompleteAll()
  }

});

module.exports = MainSection;
