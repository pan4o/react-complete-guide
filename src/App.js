import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App!</h1>
        <p>This is really working</p>
        <Person name="Pancho" age="30">My Hobbie: Breaking</Person>
        <Person name="Tom" age="33" />
        <Person name="Bill" age="63" />
      </div>
    );
    // return React.createElement(
    //   'div',
    //   null,
    //   React.createElement(
    //     'h1',
    //     {
    //       className: 'App'
    //     },
    //     'Hello man'
    //   )
    // );
  }
}

export default App;
