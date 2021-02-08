// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// const countReducer = (state, action) => {
//   // return an object that has the value of both state and new state(action)
//   return {
//     ...state,
//     // supporting both function and object
//     ...(typeof action === 'function' ? action(state) : action),
//   }
// }

const countReducer = (state, {type, step}) => {
  switch (type) {
    case 'INCREMENT':
      return {count: state.count + step}
    default:
      break
  }
}

function Counter({initialCount = 0, step = 1}) {
  // second argument on the left is the dispatch funciton (the return of the reducer)
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  // const increment = () =>
  //   setState(currentState => ({count: currentState.count + step}))
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
