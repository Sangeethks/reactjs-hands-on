export default {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  ADD_COUNTER: 'ADD_COUNTER',
  MINUS_COUNTER: 'MINUS_COUNTER',
  SAVE_RESULTS: 'SAVE_RESULTS',
  DELETE_RESULTS: 'DELETE_RESULTS',
  increment: function () {
    console.log('[Actions] increment this', this);

    return { type: this.INCREMENT }
  },
  decrement: function () {
    return { type: this.DECREMENT }
  },
  add_counter: function () {
    return { type: this.ADD_COUNTER }
  },
  minus_counter: function () {
    return { type: this.MINUS_COUNTER }
  },
  save_results: function (result) {
    return { type: this.SAVE_RESULTS, result }
  },
  delete_results: function (index) {
    return { type: this.DELETE_RESULTS, index }
  }
}
