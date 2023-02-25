import React from 'react'
import HeaderDate from './HeaderDate';

export default function NewsHeader(props) {
    const {data} = props;
    const {onChange} = props;

    const selectCategory = (e) =>{
        onChange(e.target.innerHTML)
    }
    
    const categoriesRender = data.map((element, index) =>{
        return <button onClick={selectCategory} key={index} class='categoriesButton' type='button' >{element}</button>
    })

  return (
    <div className='HeaderCategories'>
      {categoriesRender}
      <HeaderDate />
    </div>
  )
}

/**
 * Элемент отбражает категории новостей верхнего блока 
 */
