import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

  // --- CREATE

  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside constructor()', props);
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount()');
  }

  // render()

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()');
  }

  // --- UPDATE

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }

  // render()

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] Inside componentDidUpdate');
  }

  render() {
    console.log('[Persons.js] Inside render()');
    return this.props.persons.map((person, index) => {
        return <Person
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)} />
      });
  }
};

export default Persons;
