var React = require('react');
var ReactPropTypes = React.PropTypes;

var ENTER_KEY_CODE = 13;

var TodoTextInput = React.createClass({
  propTypes: {
    id: ReactPropTypes.string,
    placeholder: ReactPropTypes.string,
    onSave: ReactPropTypes.func.isRequired // Call back func
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
    this.props.onSave(this.state.value);
    this.setState({value: ""}); // Reset state
  },

  _onChange: function(e) {
    this.setState({value: e.target.value});
  },  

  render: function() {
    return (
      <input
        id = {this.props.id}
        placeholder = {this.props.placeholder}
        value = {this.state.value} 
        onKeyDown = {this._onKeyDown} // Assign func straight away.
        onBlur = {this._save}
        onChange = {this._onChange}
        autoFocus = {true}
      />
    );
  }

});




module.exports = TodoTextInput;
