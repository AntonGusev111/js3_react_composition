import { useState } from 'react'
import './App.css'
import CardImg from './components/CardImg'
import CardBody from './components/CardBody'

import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Alert } from 'bootstrap'


function App() {
  const data = {
    url:'https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/156/586/image/base_87716f252d.jpg',
    title:'Some Title',
    Text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    Button: {
      text: 'Click me',
      type:'button'
    }
  };

  return (
    <Card style={{ width: '12rem' }}>
    <CardImg data ={data} />
    <CardBody data = {data} />
  </Card>
  )
}

export default App
