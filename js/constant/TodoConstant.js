// https://www.npmjs.com/package/keymirror
// It is called keymirror, not keyMirror
var keyMirror = require("keymirror");

var TodoConstant = { 
  TODO_CREATE: null,
  TODO_UPDATE_TEXT: null,
  TODO_COMPLETE: null,
  TODO_UNDO_COMPLETE: null,
  TODO_TOGGLE_COMPLETE_ALL: null,
  TODO_DESTROY: null,
  TODO_DESTROY_COMPLETED: null,
  TODO_DESTROY_ALL: null
}

TodoConstant = keyMirror(TodoConstant);

module.exports = TodoConstant;
