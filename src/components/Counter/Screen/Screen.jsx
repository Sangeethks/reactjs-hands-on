import React from 'react'
import styles from './Screen.scss'

const Screen = (props) => {
  return (
    <div className={styles.Screen}>
      <h4>Count - <span>{props.count}</span></h4>
    </div>
  )
}

export default Screen
