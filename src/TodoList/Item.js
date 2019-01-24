import React from 'react';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickCheck = this.onClickCheck.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
  }

  onClickClose() {
    let id = parseInt(this.props.id);
    this.props.removeItem(id);
  }

  onClickCheck() {
    let id = parseInt(this.props.id);
    this.props.checkItem(id);
  }

  onClickEdit() {
    let id = parseInt(this.props.id);
    let value = this.props.item.value;

    let text = prompt("please enter new text", value);

    if (text !== null && this.props.item.value !== text) {
      this.props.editItem(id, text);
    }
  }

  render () {
    return(
      <li className="list-group-item ">
        <div>
          <input ref="itemCheckBox" type="checkbox" name="scales" className="checkbox" onClick={this.onClickCheck} checked={this.props.item.isCheck}/>
          <button type="button" onClick={this.onClickClose}>X</button>
          <button type="button" onClick={this.onClickEdit}>EDIT</button>
          {this.props.item.value}
        </div>
      </li>
    );
  }
}
