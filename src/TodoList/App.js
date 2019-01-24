import React from 'react';
import ItemList from './ItemList';
import AddForm from './AddForm';


export default class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {todoItems: [
      {value: "fuck the system", isCheck: false},
      {value: "Yo", isCheck: false},
      {value: "3rd task", isCheck: false}
    ]};
  }

  addItem = (todoItem) => {
    let todoItems = this.state.todoItems;

    todoItems.push({
      value: todoItem.newItemValue,
      isCheck: false
    });

    this.setState({todoItems: todoItems});
  }

  deleteChecked = () => {
    let todoItems = this.state.todoItems;
    let todoItemsNew = [];

    todoItems.forEach(function(item, index, arr) {
      if (!item.isCheck) todoItemsNew.push(item);
    });

    this.setState({todoItems: todoItemsNew});
  }

  removeItem = (itemId) => {
    let todoItems = this.state.todoItems;
    todoItems.splice(itemId, 1);
    this.setState({todoItems: todoItems});
  }

  editItem = (itemId, value) => {
    let todoItems = this.state.todoItems;
    todoItems[itemId].value = value;
    this.setState({todoItems: todoItems});
  }

  checkItem = (itemIndex) => {
    let todoItems = this.state.todoItems;
    todoItems[itemIndex].isCheck = !todoItems[itemIndex].isCheck;
    this.setState({checkItemList: todoItems});
  }

  render() {

    return (
      <div>
        <ItemList
          items={this.state.todoItems}
          removeItem={this.removeItem}
          checkItem={this.checkItem}
          editItem={this.editItem}
          deleteChecked={this.deleteChecked}
        />
        <AddForm addItem={this.addItem} />
      </div>
    );
  }
}
