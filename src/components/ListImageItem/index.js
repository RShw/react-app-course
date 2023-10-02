import React from 'react'
import { styles } from './styles'
import WrapperComponent from '../WrapperComponent'
import { useDispatch } from 'react-redux'
import { deleteImage } from '../../store.js/features/imagesSlice'

export default function ListImageItem({
  title, 
  description, 
  index,
}) {

  const dispatch = useDispatch()

  function onButtonClick(){
    dispatch(deleteImage({index}))
  }

  return (
    <WrapperComponent>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
        <button onClick={onButtonClick}>Delete</button>
    </WrapperComponent>
  )
}
