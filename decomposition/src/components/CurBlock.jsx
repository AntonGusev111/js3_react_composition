import React from 'react'

export default function CurBlock(props) {
    const {data} = props;

    const curRender = data.map((element, index)=>{

        return(<div key = {index} className="cur">
                <h5 className='curElem'>{element.name}</h5>
                <h5 className='curElem'>{element.rialto}</h5>
                <h5 className='curElem'>{element.rate}</h5>
                <h5 className='curElem fontGrey'>{element.dynamics}</h5>
            </div>)
    })
    
  return (
    <div className='CurBlock'>
      {curRender}
    </div>
  )
}

/**
 * Данный элемент отображает блок курса валют
 */