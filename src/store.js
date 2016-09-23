import { createStore } from 'redux'

function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

let Store = createStore(counter);

Store.subscribe(() =>
  console.log(Store.getState())
)

export default Store;
