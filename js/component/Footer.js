var React = require("react");
var ReactPropType = React.PropTypes;
var TodoAction = require("../action/TodoAction.js");

var Footer = React.createClass({
  // propTypes, coming from nowhere.
  // It is just a json object.
  propTypes: { 
    all_todos: ReactPropType.object.isRequired
  },

  render: function() {
    var all_todos = this.props.all_todos;
    var all_todo_total = Object.keys(all_todos).length;

    // Don't refresh at all
    // Faster
    if(all_todo_total) {
      return null;
    }

    var completed_num = 0;
    var is_completed = false;
    for(var key in all_todos) {
      is_completed = all_todos[key].complete;
      if(is_completed) {
        ++completed_num;
      }     
    }

    var item_left = all_todo_total - completed_num; // This can be 0
    var item_or_items_phrase = item_left === 1 ? " item" : " items";
    item_or_items_phrase += " left";

    var clear_complete_button;
    // Still have something to process
    if(completed_num) {
      clear_complete_button = 
      <button 
        id="clear_button"
          
        onClick={this.clear_complete_button}
      >
        Clear
      </button>;
    }

    return (
      <footer id="footer">
        <span id="todo-count">
          <strong>
            {item_left}
          </strong>
    
          {item_or_items_phrase}
        </span>

        {clear_complete_button}
      </footer>      
    );
  },

  clear_complete_button: function() {
    TodoAction.destroyCompleted();
  }

});

module.exports = Footer;
