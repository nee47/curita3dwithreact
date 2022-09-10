import React from 'react'
import './NewestContent.css'
import GalleryItem from './GalleryItem'

function NewestContent() {
  return (
    <>
      <section className='newest-content'>
        <h2>Lo mas nuevo</h2>
        <ul className='newest__imgs-container'>
          <GalleryItem
            src='imgs/gallery/homero.png'
            alt='homero simpson'
          />

          <GalleryItem
            src='imgs/gallery/amongus2.png'
            alt='amongus among us'
          />
        </ul>
      </section>
      
    </>
  )
}

export default NewestContent
