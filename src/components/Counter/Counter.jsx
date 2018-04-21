import React, { Component } from 'react'
import Screen from './Screen/Screen'
import Controls from './Controls/Controls'
// Connecting component with redux
import { connect } from 'react-redux'
// Importing styles
import styles from './Counter.scss'
// ActionTypes
import ActionTypes from '@/Store/ActionTypes'

class Counter extends Component {
  render () {
    let savedResults = null;

    console.log('[counter -> savedResults ]', this.props.savedResults);

    if (this.props.savedResults && this.props.savedResults.length) {
      savedResults = this.props.savedResults.map((result, i) => {
        return (
          <li key={i} onClick={() => this.props.onDeleteResults(i)}>{result.value}</li>
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
          saveResults={this.props.onSaveResults}
          />

        <button onClick={() => this.props.onSaveResults(this.props.counter)}>Save Result</button>

        <div className={styles.SavedResults}>
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
    counter: state.counter.counter,
    savedResults: state.results.savedResults
  }
}

// Actions
const mapDispathToActions = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: ActionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: ActionTypes.DECREMENT }),
    onAddCounter: () => dispatch({ type: ActionTypes.ADD_COUNTER }),
    onMinusCounter: () => dispatch({ type: ActionTypes.MINUS_COUNTER }),
    onSaveResults: (result) => dispatch({ type: ActionTypes.SAVE_RESULTS, result }),
    onDeleteResults: (index) => dispatch({ type: ActionTypes.DELETE_RESULTS, index })
  }
}

export default connect(mapStateToProps, mapDispathToActions)(Counter)
