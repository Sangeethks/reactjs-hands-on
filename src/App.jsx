import React, { Component } from 'react';
import styles from './App.scss';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [{
      name: 'Sangeeth', age: 23
    }, {
      name: 'Jhon', age: 22
    }, {
      name: 'Manu', age: 30
    }],
    inputModal: '',
    showPersons: false,
  }

  switchPersonsNameCB = (name) => {
    // Change the state
    this.setState({
      persons: [{
        name, age: 23
      }, {
        name: 'Jhon', age: 22
      }, {
        name: 'Manu', age: 30
      }]
    });
  } // switchPersonsNameCB

  personInputChangeCB = (event, index) => {
    let persons = [...this.state.persons];

    persons.map((person, i) => {
      return persons[index].name = event.target.value;
    });

    this.setState({
      persons
    });

    // Another Approach
    // let pIndex = persons.findIndex((person) => {
    //   return persons[index].name === person.name;
    // });
    //
    // if (pIndex === -1) return;
    //
    // // Change the name of array item by index
    // persons[pIndex].name = event.target.value;
    //
    // this.setState({
    //   persons
    // });
  }

  togglePersons = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  closePersonsClickCB = (index) => {
    let persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  }

  render() {
    // Create a Persons block for cleaner code
    // For that set the initial value to null, so that nothing will display at
    // first
    let personsBlock = null;
    // Now check the condition
    if (this.state.showPersons) {
      personsBlock = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <Person
                  name={person.name}
                  age={person.age}
                  key={index}
                  personInputChangeEvent={(event) => this.personInputChangeCB(event, index)}
                  closePersonsClickEvent={() => this.closePersonsClickCB(index)}>
                </Person>
              );
            })
          }
        </div>
      ); // personsBlock
    }

    return (
      <div className={styles.App}>
        <h4>Hello React.js</h4>

        <button onClick={this.togglePersons}>Toggle Persons</button>

        {
          // The personsBlock code defined above in render method
          personsBlock
        }
      </div>
    );
  }

  // NOTE: We can also render JSX using this style
  // render() {
  //   return (
  //     React.createElement('div', {
  //       className: 'App'
  //     }, 'Hello', React.createElement(
  //       'h1', null, 'The Text'
  //     ))
  //   )
  // }
}

export default App;
