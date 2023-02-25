import { useState } from 'react'
import './App.css'

import data from './data.json'
import News from './components/News'
import TopAdvertisement from './components/advertisement/TopAdvertisement'
import CurBlock from './components/CurBlock'
import SearchBlock from './components/SearchBlock'
import Advertising_banner from './components/advertisement/Advertising_banner'
import Footer from './components/footer/Footer'



function App() {


  return (
    <>
      <div className="header">
        <News news = {data.news} />
        <TopAdvertisement data={data.top_advertisement} />
      </div>
      <CurBlock data ={data.currencies} />
      <SearchBlock data = {data.search_block} />
      <Advertising_banner data = {data.advertising_banner} />
      <Footer data={data.footer} />
    </>
  )
}

export default App
