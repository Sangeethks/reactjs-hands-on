export default {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  ADD_COUNTER: 'ADD_COUNTER',
  MINUS_COUNTER: 'MINUS_COUNTER',
  SAVE_RESULTS: 'SAVE_RESULTS',
  DELETE_RESULTS: 'DELETE_RESULTS',
  increment () {
    console.log('[Actions] increment this', this);

    return { type: this.INCREMENT }
  },
  decrement () {
    return { type: this.DECREMENT }
  },
  add_counter () {
    return { type: this.ADD_COUNTER }
  },
  minus_counter () {
    return { type: this.MINUS_COUNTER }
  },
  save_results (result) {
    return { type: this.SAVE_RESULTS, result }
  },
  delete_results (index) {
    return { type: this.DELETE_RESULTS, index }
  }
}
