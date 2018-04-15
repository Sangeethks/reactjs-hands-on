import React from 'react'
import styles from './Controls.scss'

const Controls = (props) => {
  return (
    <div className={styles.Controls}>
      <div className="BtnControls">
        <button className={styles.CtrlBtn}>Add</button>
        <button className={styles.CtrlBtn}>Minus</button>
        <button className={styles.CtrlBtn}>Add 5</button>
        <button className={styles.CtrlBtn}>Minus 5</button>
      </div>
    </div>
  )
}

export default Controls
