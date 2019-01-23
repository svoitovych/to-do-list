import React from 'react';
import TodoList from './todoList';
import TodoForm from './todoForm';
import TodoDeleteForm from './todoDeleteForm';


export default class TodoApp extends React.Component {

  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.checkItem = this.checkItem.bind(this);
    this.deleteChecked = this.deleteChecked.bind(this);

    this.state = {todoItems: [
      {value: "fuck the system", isCheck: false},
      {value: "Yo", isCheck: false}
    ]};
  }

  addItem(todoItem) {
    let todoItems = this.state.todoItems;

    todoItems.push({
      id: this.state.todoItems.length+1,
      value: todoItem.newItemValue,
      isCheck: false
    });

    this.setState({todoItems: todoItems});
  }

  deleteChecked() {
    let todoItems = this.state.todoItems;

    let todoItemsNew = [];

    todoItems.forEach(function(item, index, arr) {
      if (!item.isCheck) todoItemsNew.push(item);
    });

    this.setState({todoItems: todoItemsNew});

    console.log(todoItems);
  }

  removeItem (itemId) {
    console.log(itemId);
    let todoItems = this.state.todoItems;
    todoItems.splice(itemId, 1);
    this.setState({todoItems: todoItems});
  }

  checkItem (itemIndex) {
    let todoItems = this.state.todoItems;

    todoItems[itemIndex].isCheck = !todoItems[itemIndex].isCheck;

    this.setState({checkItemList: todoItems});
  }


  render() {
    return (
      <div>
        <TodoList items={this.state.todoItems} removeItem={this.removeItem} checkItem={this.checkItem}/>
        <TodoDeleteForm deleteChecked={this.deleteChecked}/>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}
