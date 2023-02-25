import React from 'react'

export default function NewsRows(props) {

  const {category, data} = props;

  const rows = data.news.news;


  const newsRender = rows.map((element, index) =>{
    if (element.categories == category){
      return(
        <li key={index} className='newsRow'>
          <div className="imgRow"><img className='imgNews' src={element.pict} alt="" /></div>
          <div className="textRow"><a className='textNews' href={element.src} > {element.text} </a></div>
        </li>
      )
    }
  })


  return (
    <div>
      <ul className='newsTable'>
        {newsRender}
      </ul>
    </div>
  )
}


/**
 * Элемент выводит новости по категориям
 */