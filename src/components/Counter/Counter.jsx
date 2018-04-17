import React, { Component } from 'react'
import Screen from './Screen/Screen'
import Controls from './Controls/Controls'
// Connecting component with redux
import { connect } from 'react-redux'

class Counter extends Component {

  render () {
    let savedResults = null;
    if (this.props.savedResults && this.props.savedResults.length) {
      savedResults = this.props.savedResults.map((result, i) => {
        return (
          <li key={i}>{result}</li>
        )
      })
    }

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
          saveResults={this.props.onSaveResults}
          />

        <button onClick={this.props.onSaveResults}>Save Result</button>

        <div className="savedResults">
          <ul>
            { savedResults }
          </ul>
        </div>
      </div>
    )
  }
}

// Subscription
const mapStateToProps = state => {
  return {
    counter: state.counter,
    addValue: state.addValue,
    minusValue: state.minusValue,
    savedResults: state.savedResults
  }
}

// Actions
const mapDispathToActions = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
    onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
    onAddCounter: () => dispatch({ type: 'ADD_COUNTER' }),
    onMinusCounter: () => dispatch({ type: 'MINUS_COUNTER' }),
    onSaveResults: () => dispatch({ type: 'SAVE_RESULTS' })
  }
}

export default connect(mapStateToProps, mapDispathToActions)(Counter)
