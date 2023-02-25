import React from 'react'
import { Card } from 'react-bootstrap'

export default function CardImg(props) {
    const{ data } = props

  return (
    <div>
      <Card.Img variant="top" className='CardImg' src={data['url']} />
    </div>
  )
}
