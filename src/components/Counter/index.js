import React, {useState} from 'react'
import { styles } from './styles'

export default function Counter() {

    ///Hook useState
    const [count, setCount] = useState(0)

  return (
    <>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <p style={styles.text}>{count}</p>
    </>
  )
}
