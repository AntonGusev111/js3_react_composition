import React from 'react'
import CradTitle from './CradTitle';
import CardText from './CardText';
import CardButton from './CardButton';

import { Card } from 'react-bootstrap'


export default function CardBody(props) {
  return (
    <div>
      <Card.Body>
      <CradTitle data={props}/>
      <CardText data={props} />
      <CardButton data={props} />
    </Card.Body>
    </div>
  )
}
