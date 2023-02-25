import React from 'react'

export default function FooterInfoBlocks(props) {
    const {data} = props;
    const content = data.block

    const contentRender = content.map((element, index)=>{
        return(
            <div key={index} className="footerBlockRow">
                <img className="footerBlockBtn" src={element.btn} alt="" />
                <a className='footerBlockUrl' href={element.url}>{element.url_text}</a> - {element.text}
            </div>
        )
    })
  return (
    <div className='footerInfoBlock'>
       <div className="footerHeader">
            <a  href={data.header.url}>{data.header.text}</a>
            <img  className='footerBlockBtn' src={data.header.btn} alt="" />
       </div>
       <div className="footerBlockContent">
            {contentRender}
       </div>  
    </div>
  )
}

/**
 * Этот элемент формирует нижние блоки кроме погоды
 */