import React from 'react'
import { styles } from './styles'
import ListImageItem from '../ListImageItem'
import WrapperComponent from '../WrapperComponent'

export default function ListImage({data, setData}) {

    return (
        <>
            <h2 style={styles.title}>Do veniam do ut aliqua deserunt exercitation cillum nisi.</h2>
            <WrapperComponent>
                {data.map((item, index) => (
                    <ListImageItem 
                        imageUrl={item.imageUrl} 
                        alt={item.alt} 
                        title={item.title} 
                        description={item.description} 
                        index={index}
                        data={data} 
                        setData={setData}
                    />
                ))}
            </WrapperComponent>
        </>
    )
}
