import React from 'react';



export default class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;

    if(newItemValue) {
      this.props.addItem({newItemValue});
      this.refs.form.reset();
    }
  }

  render () {
    return (
      <form ref="form" onSubmit={this.onSubmit}>
        <input type="text" ref="itemName" placeholder="add a new todo..."/>
        <button type="submit">Add</button>
      </form>
    );
  }
}
