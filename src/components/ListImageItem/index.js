import React from 'react'
import { styles } from './styles'
import WrapperComponent from '../WrapperComponent'

export default function ListImageItem({imageUrl, alt, title, description}) {
  return (
    <WrapperComponent>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
    </WrapperComponent>
  )
}
