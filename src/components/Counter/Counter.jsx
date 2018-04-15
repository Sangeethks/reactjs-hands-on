import React, { Component } from 'react'
import Screen from './Screen/Screen'
import Controls from './Controls/Controls'

class Counter extends Component {
  constructor() {
    super ()
    state: {

    }
  }

  render () {
    return (
      <div>
        <Screen></Screen>
        <Controls></Controls>
      </div>
    )
  }
}

export default Counter
