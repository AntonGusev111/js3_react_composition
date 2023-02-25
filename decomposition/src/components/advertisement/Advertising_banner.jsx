import React from 'react'

export default function Advertising_banner(props) {

    const {data} = props;

  return (
    <div>
      <a href={data.url}><img src={data.img} alt="" /></a>
    </div>
  )
}

/**
 * Этот элемент формирует рекламный банер под строкой поиска
 */