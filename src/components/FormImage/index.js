import React, {useState, useEffect} from 'react'
import { styles } from './styles'
import { useDispatch } from 'react-redux'
import { addImage } from '../../store.js/features/imagesSlice'

export default function FormImage() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [isButtonActive, setIsButtonActive] = useState(false)

  const dispatch = useDispatch()

  function onSubmit(e){
    e.preventDefault()
    //remplace la fonction par celle du contexte
    dispatch(addImage({title, description}))
    setDescription("")
    setTitle("")
  }

  useEffect(() => {
    title && description ? setIsButtonActive(true) : setIsButtonActive(false)
  }, [title, description])

  function updateTitle(e) {
    setTitle(e.target.value)
  }

  function updateDescription(e) {
    setDescription(e.target.value)
  }

  function onReset() {
    setTitle("")
    setDescription("")
  }

  return (
    <div style={styles.formContainer}>
        <form onSubmit={onSubmit} style={styles.form}>

            <label htmlFor={"title"} style={styles.label}>title :</label>
            <input
              id={"title"} 
              type='text' 
              value={title}
              style={styles.input} 
              placeholder='Title'
              onChange={updateTitle}
            />

            <label htmlFor={"description"} style={styles.label}>description :</label>
            <textarea 
              id={"description"} 
              type='text' 
              value={description}
              style={{...styles.input, ...styles.textarea}} 
              rows={3} 
              placeholder='Description'
              onChange={updateDescription}
            />

            <div style={styles.buttonContainer}>
              {!isButtonActive ?
                <button disabled={true} style={{...styles.button, ...styles.buttonImportant, ...styles.buttonDisable}}>Envoyer</button>
              :
                <button type='submit' style={{...styles.button, ...styles.buttonImportant}}>Envoyer</button>
              }
              <button style={styles.button} onClick={onReset}>Reset</button>
            </div>

        </form>
    </div >
  )
}
