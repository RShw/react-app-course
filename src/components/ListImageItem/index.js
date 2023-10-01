import React from 'react'
import { styles } from './styles'

export default function ListImageItem({imageUrl, alt, title, description}) {
  return (
    <div>
        <div>
            <img style={styles.images} src={imageUrl} alt={alt}/>
            <h3 style={styles.title}>{title}</h3>
            <p style={styles.description}>{description}</p>
        </div>
    </div>
  )
}
