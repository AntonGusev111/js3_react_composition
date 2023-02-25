import React from 'react'

export default function TopAdvertisement(props) {
    const {data} = props;
    
  return (
    <div className='TopAdvertisement'>
        <img className='TopAdvImg' src={data.img} alt="" />
        <div> <a className='TopAdvHeader' href={data.header_adver.src}>{data.header_adver.text}</a></div>
        <p className='TopAdvText' >{data.text}</p>
    </div>
  )
}

/**
 * Данный элемент отображает верхний рекламный блок
 */