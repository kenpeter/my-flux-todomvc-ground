var React = require('react');

var Header = require("./Header.js");
var MainSection = require("./MainSection.js");
var Footer = require("./Footer.js");

var TodoStore = require("../store/TodoStore.js");


// Main app
var TodoApp = React.createClass({
  // It will only invoke once and before everything.
  getInitialState: function() {
    console.log("get init state");    

    return getTodoState();
  },

  componentWillMount: function() {
    console.log("com will mount");
  },
 
  // So we don't change state here, keep it pure, constant.
  render: function() {
    return (
      <div>
        <Header />
        <MainSection 
          todos={this.state.todos}
          all_completed={this.state.areAllComplete}
        />
        <Footer /> 
      </div>  
    );
    
  },

  componentDidMount: function() {
    console.log("com did mount");
  },

  componentWillUnmount: function() {
    console.log("will unmount");
  }


});


function getTodoState() {
  return {
    todos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete()
  };
}

module.exports = TodoApp;
