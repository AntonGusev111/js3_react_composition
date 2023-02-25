import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function CradTitle(props) {
    const {data} = props;

  return (
    <div>
      <Card.Title >{data["data"]['title']}</Card.Title>
    </div>
  )
}
