import React, {Fragment} from 'react';
import Item from './Item';

export default class ItemList extends React.Component {

  deleteChecked = () => {
    this.props.deleteChecked();
  }

  render () {
    var items = this.props.items.map((item, id, isCheck) => {
      return (
        <Item
          key={id}
          item={item}
          id={id}
          isCheck={isCheck}
          removeItem={this.props.removeItem}
          editItem={this.props.editItem}
          checkItem={this.props.checkItem}
        />
      );
    });

    return (
      <Fragment>
        <ul className="list-group"> {items} </ul>
        <button type="button" onClick={this.deleteChecked}>delete checked</button>
      </Fragment>
    );
  }
}
