var AppDispatcher = require("../dispatcher/AppDispatcher.js");
var TodoConstant = require("../constant/TodoConstant.js");

var TodoAction = {

  // This is the last step in the single flow diagram.
  create: function(text) {
    var pack = {
      actionType: TodoConstant.TODO_CREATE,
      value: text // text, value?
    };
    AppDispatcher.dispatch(pack);
  },

  updateText: function(id, text) {
    var pack = {
      actionType: TodoConstant.TODO_UPDATE_TEXT,
      id: id,
      value: text
    };

    AppDispatcher.dispatch(pack);
  },  

  /* Whether a single todo is done */
  toggleComplete: function(todo) {
    var id = todo.id;

    var theActionType = todo.complete ?
      // Well undo the complete, toggle
      TodoConstant.TODO_UNDO_COMPLETE :
      TodoConstant.TODO_COMPLETE;

    var pack = {
      actionType: theActionType,
      id: id
    };    

    AppDispatcher.dispatch(pack);
  },

  toggleCompleteAll: function() {
    var theActionType = TodoConstant.TODO_TOGGLE_COMPLETE_ALL;

    var pack = {
      actionType: theActionType
    };    

    AppDispatcher.dispatch(pack);
  },

  destroy: function(id) {
    var theActionType = TodoConstant.TODO_DESTROY;

    var pack = {
      id: id,
      actionType: theActionType
    };

    AppDispatcher.dispatch(pack);  
  },  

  destroyCompleted: function() {
    var theActionType = TodoConstant.TODO_DESTROY_COMPLETED;

    var pack = {
      actionType: theActionType
    };

    AppDispatcher.dispatch(pack);
  },

  destroyAll: function(id) {
    var theActionType = TodoConstant.TODO_DESTROY_ALL;

    var pack = {
      actionType: theActionType
    };

    AppDispatcher.dispatch(pack);  
  }
  

}

module.exports = TodoAction;
