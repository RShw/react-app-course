import React from 'react'
import { styles } from './styles'
import WrapperComponent from '../WrapperComponent'

export default function ListImageItem({
  title, 
  description, 
  index, 
  data,
  setData
}) {

  function onButtonClick(){
    data.splice(index, 1)
    setData([...data])
  }

  return (
    <WrapperComponent>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
        <button onClick={onButtonClick}>Delete</button>
    </WrapperComponent>
  )
}
