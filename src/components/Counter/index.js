import React, {useReducer} from 'react'
import { styles } from './styles'

export default function Counter() {

    const initialState = 0

    const reducer = (state, action) => {
      switch(action.type) {
        case 'increment':
          return state + action.payload.step
        case 'decrement':
          return state - action.payload.step
        case 'reset':
          return initialState
        default:
          return state
      }
    }

    ///Hook useRecucer
    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <button onClick={() => dispatch({type: "increment", payload: {step: 2}})}>Increment</button>
      <button onClick={() => dispatch({type: "decrement", payload: {step: 3}})}>Decrement</button>
      <button onClick={() => dispatch({type: "reset"})}>Reset</button>
      <p style={styles.text}>{state}</p>
    </>
  )
}
