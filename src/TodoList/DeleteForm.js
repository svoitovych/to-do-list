import React from 'react';

export default class DeleteForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.deleteChecked();
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <button type="submit">Delete Checked</button>
      </form>
    );
  }
}
