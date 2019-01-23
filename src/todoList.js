import React from 'react';
import TodoListItem from './todoListItem';

export default class TodoList extends React.Component {

  render () {
    var items = this.props.items.map((item, id, isCheck) => {
      return (
        <TodoListItem key={id} item={item} id={id} isCheck={isCheck} removeItem={this.props.removeItem} checkItem={this.props.checkItem}/>
      );
    });

    return (
      <ul className="list-group"> {items} </ul>
    );
  }
}
