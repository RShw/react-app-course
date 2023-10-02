import React, {useReducer, useState} from 'react'
import { styles } from './styles'

export default function Counter() {

    const initialState = 0

    const reducer = () => {

    }

    const initializer = () => {

    }

    ///Hook useRecucer
    const [state, dispatch] = useReducer(reducer, initialState, initializer)

  return (
    <>
        <button onClick={() => dispatch()}>Add</button>
        <p style={styles.text}>{state}</p>
    </>
  )
}
