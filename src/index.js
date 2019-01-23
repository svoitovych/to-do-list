import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Tweet  extends React.Component {
  render() {
    return (
      <div>
        <h1> {this.props.username} </h1>
        <h2>{this.props.name}</h2>
        <p>{this.props.date}</p>
        <p>{this.props.message}</p>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Tweet username="serg_freedom" name="serg" date="21.10.90" message="hi everyone"/>
        <Tweet username="serg_freedosdm" name="sersadg" date="21.10.9025" message="hi everyone and pidors"/>
      </div>
    );
  }
}

ReactDOM.render(<App name="Moxie" />, document.getElementById('root'));
