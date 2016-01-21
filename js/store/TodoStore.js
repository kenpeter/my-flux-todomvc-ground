var AppDispatcher = require("../dispatcher/AppDispatcher.js");
var EventEmitter = require('events').EventEmitter;
var TodoConstant = require("../constant/TodoConstant");
var Assign = require("object-assign");

var _todos = {};
var CHANGE_EVENT = "change";


function create(text) {
  var rand = Math.floor(Math.random() * 999999);
  var rand_1 = +new Date() + rand;
  var id = (rand_1.toString(36));

  _todos[id] = {
    id: id,
    text: text,
    complete: false
  }
}

function update(id, update) {
  _todos[id] = Assign({}, _todos[id], update); // Here you can see update is object
}

// Update all todo with the same obj.
function update_all(single_update) {
  for(var id in _todos) {
    update(id, single_update);
  }
}

function destroy_single_todo(id) {
  delete _todos[id];
}

// If not completed, no deleted
function delete_all_completed_todos() {
  for(var id in _todos) {
    if(_todos[id].complete) {
      destroy_single_todo(id);
    }
  }
}


var TodoStore = Assign({}, EventEmitter.prototype, {

  areAllComplete: function() {
    for(var id in _todos) {
      if(!_todos[id].complete) {
        return false;
      }
    }
    
    return true;
  },

  getAll: function() {
    return _todos;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  
  
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);  
  }
});


AppDispatcher.register(function(action){
  var text;

  switch(action.actionType) {
    case TodoConstant.TODO_CREATE:
      text = action.value.trim();
      if(text !== '') {
        create(text);
        TodoStore.emitChange();
      }
      break;

    case TodoConstant.TODO_UPDATE_TEXT:
      text = action.value.trim();
      if(text !== '') {
        update(action.id, {text: text});
        TodoStore.emitChange();
      }
      break;

    case TodoConstant.TODO_COMPLETE:
      update(action.id, {complete: true});
      TodoStore.emitChange();
      break;        

    case TodoConstant.TODO_UNDO_COMPLETE:
      update(action.id, {complete: false});
      TodoStore.emitChange();
      break;

    case TodoConstant.TODO_TOGGLE_COMPLETE_ALL:
      if(TodoStore.areAllComplete()) {
        update_all({complete: true});
      }
      else {
        update_all({complete: false});  
      }
      TodoStore.emitChange();
      break;

    case TodoConstant.TODO_DESTROY:      
      destroy_single_todo(action.id);    
      TodoStore.emitChange();
      break;

    case TODO_DESTROY_COMPLETED:
      delete_all_completed_todos();    
      TodoStore.emitChange();
      break;      

    case TodoConstant.TODO_DESTROY_ALL:
      delete_all_completed_todos();
      TodoStore.emitChange();
      break;      
    
    default:

  }

});


module.exports = TodoStore;
