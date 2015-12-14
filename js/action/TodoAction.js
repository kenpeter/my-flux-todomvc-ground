var AppDispatcher = require("../dispatcher/AppDispatcher.js");
var TodoConstant = require("../constant/TodoConstant.js");

var TodoAction = {

  create: function(text) {
    var pack = {
      actionType: TodoConstant.TODO_CREATE,
      value: text // text, value?
    };
    AppDispatcher.dispatch(pack);
  }
}

module.exports = TodoAction;
