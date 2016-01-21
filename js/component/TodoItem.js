var React = require('react');
var ReactPropTypes = React.PropTypes;
var TodoAction = require("../action/TodoAction.js");
var TodoTextInput = require("./TodoTextInput.js");

var classNames = require("classnames");

var TodoItem = React.createClass({

  propTypes: {
    todo: ReactPropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      isEditing: false
    };
  },

  // Sometime needs recompile
  render: function() {
    var todo = this.props.todo;

    var my_input = "";
    if(this.state.isEditing) {
      my_input = 
        <TodoTextInput
          className="edit"
          onSave={this._onSave}
          value={todo.text}
        />;
    }

    // In react component, it uses className
    return (
      <li 
        className={classNames({
          "completed": todo.complete, // true will show, false will hide
          "editing": this.state.isEditing      
        })}
        key={todo.id}
      >
        <div className="view">
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={this._onChange}
            className="toggle" 
          />
          <label onDoubleClick={this._onDoubleClick}>
            {todo.text}
          </label>
          <button
            className="destroy"
            onClick={this._onDestroy}
          >
            Destroy
          </button>          
        </div>
      </li>     
    );
  },

  _onSave: function(text) {
    TodoAction.updateText(this.props.todo.id, text);
  },

  _onChange: function() {
    TodoAction.toggleComplete(this.props.todo);
  },

  // Why don't I just fire an action?
  _onDoubleClick: function() {
    this.setState({isEditing: true});
  },

  _onDestroy: function() {
    TodoAction.destroy(this.props.todo.id);
  }

});


module.exports = TodoItem;
