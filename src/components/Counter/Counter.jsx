import React, { Component } from 'react'
import Screen from './Screen/Screen'
import Controls from './Controls/Controls'
// Connecting component with redux
import { connect } from 'react-redux'
// Importing styles
import styles from './Counter.scss'
// ActionTypes
import Actions from '@/Store/Actions/Actions'

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
    onIncrementCounter: () => dispatch(Actions.increment()),
    onDecrementCounter: () => dispatch(Actions.decrement()),
    onAddCounter: () => dispatch(Actions.add_counter()),
    onMinusCounter: () => dispatch(Actions.minus_counter()),
    onSaveResults: (result) => dispatch(Actions.save_results(result)),
    onDeleteResults: (index) => dispatch(Actions.delete_results(index))
  }
}

export default connect(mapStateToProps, mapDispathToActions)(Counter)
