var React = require("react");
var EventEmitter = require('events').EventEmitter;
var Assign = require("object-assign");

var _todos = {};
var CHANGE_EVENT = "change";

var TodoStore = Assign({}, EventEmitter.prototype, {

  areAllComplete: function() {
    
    return true;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  
  getAll: function() {
    return _todos;
  }
});

module.exports = TodoStore;
