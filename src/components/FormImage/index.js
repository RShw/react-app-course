import React from 'react'
import { styles } from './styles'

export default function FormImage() {

  return (
    <div style={styles.formContainer}>
        <form style={styles.form}>

            <label htmlFor={"title"} style={styles.label}>text :</label>
            <input
              id={"title"} 
              type='text' 
              style={styles.input} 
              placeholder='Title'
            />

            <label htmlFor={"description"} style={styles.label}>description :</label>
            <textarea 
              id={"description"} 
              type='text' 
              style={{...styles.input, ...styles.textarea}} 
              rows={3} 
              placeholder='Description'
            />

            <div style={styles.buttonContainer}>
              <button style={{...styles.button, ...styles.buttonImportant}}>Envoyer</button>
              <button style={styles.button}>Reset</button>
            </div>

        </form>
    </div >
  )
}
