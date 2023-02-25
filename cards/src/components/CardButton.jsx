import React from 'react'
import { Button } from 'react-bootstrap'


export default function CardButton(props) {
    const {data} = props;

  return (
    <div>
      <Button variant="primary" type={data['data']['Button']['type']}>{data['data']['Button']['text']}</Button>
    </div>
  )
}
