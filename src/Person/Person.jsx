import React from 'react';
import styles from './Person.scss';

const Person = (props) => {
  return (
    <div className={styles.Person}>
      <span className={styles.ClosePerson} onClick={props.closePersonsClickEvent}>x</span>
      <h4 className="h4">
        Hello, My Name is {props.name} and I am {props.age} years old
      </h4>
      <p onClick={props.switchPersonsNameEvent}>{props.children}</p>

      <input type="text" onChange={props.personInputChangeEvent} value={props.name}/>
    </div>
  )
}

export default Person;
