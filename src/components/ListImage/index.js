import React from 'react'
import { styles } from './styles'

export default function ListImage(props) {

    return (
        <div>
            {props.data.map(item => (
                <div>
                    <img style={styles.images} src={item.imageUrl} alt={item.alt}/>
                    <h3 style={styles.title}>{item.title}</h3>
                    <p style={styles.description}>{item.description}</p>
                </div>
            ))}
        </div>
    )
}
