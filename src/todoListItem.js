import React from 'react';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickCheck = this.onClickCheck.bind(this);
  }
  onClickClose() {
    var id = parseInt(this.props.id);
    this.props.removeItem(id);
  }

  onClickCheck() {
    var index = parseInt(this.props.id);
    this.props.checkItem(index);
  }

  render () {

    return(
      <li className="list-group-item ">
        <div>
          <input ref="itemCheckBox" type="checkbox" name="scales" className="checkbox" onClick={this.onClickCheck} checked={this.props.item.isCheck}/>
          <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
          {this.props.item.value}
        </div>
      </li>
    );
  }
}
