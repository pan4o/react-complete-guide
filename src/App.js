import React, { Component } from 'react';
import './App.css';
import './Person/Person.css'
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'James', age: 33 },
      { name: 'Stephen', age: 28 },
      { name: 'Cavin', age: 27 },
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 33 },
        { name: 'Stephen Curry', age: 28 },
        { name: 'Cavin Durant', age: 27 },
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'James', age: 33 },
        { name: event.target.value, age: 28 },
        { name: 'Cavin Durant', age: 27 },
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'LEBA JAMES')}
          >My Hobbie: Basket ball</Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler}
          ></Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          ></Person>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi I'm a React App!</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          {this.state.showPersons ? "Hide" : "Show"} Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
