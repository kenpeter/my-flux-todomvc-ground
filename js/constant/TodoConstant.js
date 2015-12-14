// https://www.npmjs.com/package/keymirror
// It is called keymirror, not keyMirror
var keyMirror = require("keymirror");

var TodoConstant = { 
  TODO_CREATE: null 
}

TodoConstant = keyMirror(TodoConstant);

module.exports = TodoConstant;
