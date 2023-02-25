import React from 'react'

export default function SearchBlock(props) {
    const{data}=props;
    const variants = data.variants_btn;

    const search_var= variants.map((element, index)=>{
        return <a key={index} className='serchUrl serchVariant' href={element.url}>{element.text}</a>
    })

  return (
    <div className = 'search'>
        <img className='searchLogo' src={data.img} ></img>
        <div className="seachBlock">
            <div className="searchVariants">{search_var}</div>
            <div className="searchInput">
                <input type="text" />
                <button>{data.text_btn}</button>    
            </div> 
            <div className='searchExample' >Найдется Все. Например, <a className="serchUrl  searchExample fontGrey" href={data.example_value.url}>{data.example_value.text}</a> </div> 
        </div>
    </div>
  )
}

/**
 * Этот элемент формируетформирует блок строки поиска
 */