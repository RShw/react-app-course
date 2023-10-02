import React, { useContext } from 'react'
import { styles } from './styles'
import WrapperComponent from '../WrapperComponent'
import { ImageContext } from '../../hooks/ImageProvider'
import { DeleteImage } from '../../actions/Actions'

export default function ListImageItem({
  title, 
  description, 
  index,
}) {

  const {dispatch} = useContext(ImageContext)

  function onButtonClick(){
    dispatch(DeleteImage({index}))
  }

  return (
    <WrapperComponent>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
        <button onClick={onButtonClick}>Delete</button>
    </WrapperComponent>
  )
}
