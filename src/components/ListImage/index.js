import React from 'react'
import { styles } from './styles'
import ListImageItem from '../ListImageItem'
import WrapperComponent from '../WrapperComponent'

export default function ListImage({data}) {

    return (
        <div>
            <WrapperComponent>
                {data.map(item => (
                    <ListImageItem imageUrl={item.imageUrl} alt={item.alt} title={item.title} description={item.description} />
                ))}
            </WrapperComponent>
        </div>
    )
}
