import React from 'react'
import { Card } from 'react-bootstrap'

export default function CardText(props) {
    const {data} = props;

  return (
    <div>
      <Card.Text>
        {data['data']['Text']}
      </Card.Text>
    </div>
  )
}
