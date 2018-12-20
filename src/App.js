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

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)} />
          })}
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
