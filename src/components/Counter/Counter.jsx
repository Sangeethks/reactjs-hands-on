import React, { Component } from 'react'
import Screen from './Screen/Screen'
import Controls from './Controls/Controls'
// Connecting component with redux
import { connect } from 'react-redux'

class Counter extends Component {
  constructor() {
    super ()
    this.state = {
      count: 0,
      addValue: 5,
      minusValue: 6
    }
  }

  incrementBtnClickCB = () => {
    // console.log('[Counter -> incrementBtnClickCB]');
    this.setState({ count: this.state.count + 1 })
  }

  decrementBtnClickCB = () => {
    // console.log('[Counter -> incrementBtnClickCB]');
    this.setState({ count: this.state.count - 1 })
  }

  addBtnClickCB = () => {
    // console.log('[Counter -> incrementBtnClickCB -> count]', this.state.count);
    // console.log('[Counter -> incrementBtnClickCB -> addValue]', this.state.addValue);

    this.setState({ count: this.state.count + this.state.addValue })
  }

  minusBtnClickCB = () => {
    // console.log('[Counter -> incrementBtnClickCB -> count]', this.state.count);
    // console.log('[Counter -> incrementBtnClickCB -> count]', this.state.count);

    this.setState({ count: this.state.count - this.state.minusValue })
  }

  render () {
    return (
      <div>
        <Screen
          count={this.props.counter}
          />
        <Controls
          incrementBtnClickEvent={this.props.onIncrementCounter}
          decrementBtnClickEvent={this.props.onDecrementCounter}
          addBtnClickEvent={this.props.onAddCounter}
          minusBtnClickEvent={this.props.onMinusCounter}
          addValue={this.props.addValue}
          minusValue={this.props.minusValue}
          />
      </div>
    )
  }
}

// Subscription
const mapStateToProps = state => {
  return {
    counter: state.counter,
    addValue: state.addValue,
    minusValue: state.minusValue
  }
}

// Actions
const mapDispathToActions = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
    onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
    onAddCounter: () => dispatch({ type: 'ADD_COUNTER' }),
    onMinusCounter: () => dispatch({ type: 'MINUS_COUNTER' })
  }
}

export default connect(mapStateToProps, mapDispathToActions)(Counter)
