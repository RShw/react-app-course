import React from 'react'
import { styles } from './styles'
import ListImageItem from '../ListImageItem'

export default function ListImage({data}) {

    return (
        <div>
            {data.map(item => (
                <ListImageItem imageUrl={item.imageUrl} alt={item.alt} title={item.title} description={item.description} />
            ))}
        </div>
    )
}
