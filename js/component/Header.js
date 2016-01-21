var React = require('react');
var TodoTextInput = require("./TodoTextInput.js");
// // Does it means parent should always have the action, while child shouldn't
var TodoAction = require("../action/TodoAction.js");


var Header = React.createClass({

  render: function() {
    return (
      <header id="header">
        <h2>My to do list</h2>
        <TodoTextInput
          id="new-todo"
          placeholder="One thing that you want to do"
          // So this is a call back func
          onSave={this._save_an_todo_item}
        />
      </header> 
    );
  },

  // So it passes this to its children, so all children can use it.
  // Another callback function, so someone uses it and pass text to it.
  _save_an_todo_item: function(text) {
    if(text.trim()) {
      TodoAction.create(text);
    }
  }
});


module.exports = Header;
