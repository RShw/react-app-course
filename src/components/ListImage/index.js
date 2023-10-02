import React, { useContext } from 'react'
import { styles } from './styles'
import ListImageItem from '../ListImageItem'
import WrapperComponent from '../WrapperComponent'
import { ImageContext } from '../../hooks/ImageProvider'

export default function ListImage() {

    const {images} = useContext(ImageContext)

    return (
        <>
            <h2 style={styles.title}>Do veniam do ut aliqua deserunt exercitation cillum nisi.</h2>
            <WrapperComponent>
                {images.map((item, index) => (
                    <ListImageItem 
                        imageUrl={item.imageUrl} 
                        alt={item.alt} 
                        title={item.title} 
                        description={item.description} 
                        index={index}
                    />
                ))}
            </WrapperComponent>
        </>
    )
}
