import React from 'react'
import { useState } from 'react'
import NewsHeader from './nwsblock/NewsHeader'
import NewsRows from './nwsblock/NewsRows'

export default function News(props) {
    const [category, setCategory] = useState(props.news.categories[0])

    const handleNewChange = (obj) => {
        setCategory(obj)
    }



  return (
    <div>
        <div className="newsBlock">
            <NewsHeader onChange = {handleNewChange} data = {props.news.categories} />
            <NewsRows category={category} data={props} />
        </div>
    </div>
  )
}

/**
 * Элемент отображает блок новостей  
 * */
