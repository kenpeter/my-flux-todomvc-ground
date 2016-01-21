var React = require('react');
var ReactPropTypes = React.PropTypes;

var ENTER_KEY_CODE = 13;

var TodoTextInput = React.createClass({
  propTypes: {
    className: ReactPropTypes.string, // Why do I need a class name?
    id: ReactPropTypes.string,
    placeholder: ReactPropTypes.string,
    onSave: ReactPropTypes.func.isRequired, // Call back func
    value: ReactPropTypes.string
  },

  getInitialState: function() {
    return {
      value: this.props.value || ""
    }
  },

  _onKeyDown: function(e) {
    if(e.keyCode === ENTER_KEY_CODE) {
      this._save();
    }
  },

  _save: function() {
    // Does it mean parent need to do all the work?
    // Even it just passes a callback.
    // You can see that there is no store here.
    // Does it mean store stays in parent component.
    this.props.onSave(this.state.value);
    this.setState({value: ""}); // Reset state
  },

  // Once change, update the state,
  // then trigger update to component.
  _onChange: function(e) {
    this.setState({value: e.target.value});
  },  

  render: function() {
    return (
      <input
        className = {this.props.className}
        id = {this.props.id}
        placeholder = {this.props.placeholder}
        value = {this.state.value} 
        onKeyDown = {this._onKeyDown} // Essentially, it is _save()
        onBlur = {this._save}
        onChange = {this._onChange}
        autoFocus = {true}
      />
    );
  }

});




module.exports = TodoTextInput;
