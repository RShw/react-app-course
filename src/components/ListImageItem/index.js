import React from 'react'
import { styles } from './styles'
import WrapperComponent from '../WrapperComponent'

export default function ListImageItem({imageUrl, alt, title, description}) {
  return (
    <WrapperComponent>
        <img style={styles.images} src={imageUrl} alt={alt}/>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
    </WrapperComponent>
  )
}
