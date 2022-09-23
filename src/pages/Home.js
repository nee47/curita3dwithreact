import React from 'react'
import NewestContent from '../components/NewestContent'
import GalleryContent from '../components/GalleryContent'
import ShortInfo from '../components/ShortInfo'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <ShortInfo/>
      <NewestContent/>
      <GalleryContent/>   
      <Footer/>
    </>
  )
}

export default Home
