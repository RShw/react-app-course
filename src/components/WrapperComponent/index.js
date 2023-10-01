import React from 'react'
import { styles } from './styles'

export default function WrapperComponent({children}) {
  return (
    <div style={styles.container}>
      {children}
    </div>
  )
}
