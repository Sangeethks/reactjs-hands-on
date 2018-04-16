import React from 'react'
import styles from './Controls.scss'

const Controls = (props) => {
  return (
    <div className={styles.Controls}>
      <div className="BtnControls">
        <button
          className={styles.CtrlBtn}
          onClick={props.incrementBtnClickEvent} >
          Increment
        </button>
        <button
          className={styles.CtrlBtn}
          onClick={props.decrementBtnClickEvent} >
          Decrement
        </button>
        <button
          className={styles.CtrlBtn}
          onClick={props.addBtnClickEvent} >
          Add {props.addValue}
        </button>
        <button
          className={styles.CtrlBtn}
          onClick={props.minusBtnClickEvent} >
          Minus {props.minusValue}
        </button>
      </div>
    </div>
  )
}

export default Controls
