import React, { useContext } from 'react'
import { styles } from './styles'
import WrapperComponent from '../WrapperComponent'
import { ImageContext } from '../../hooks/ImageProvider'

export default function ListImageItem({
  title, 
  description, 
  index,
}) {

  const {deleteImage} = useContext(ImageContext)

  function onButtonClick(){
    deleteImage(index)
  }

  return (
    <WrapperComponent>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
        <button onClick={onButtonClick}>Delete</button>
    </WrapperComponent>
  )
}
