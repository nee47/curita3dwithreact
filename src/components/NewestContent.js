import React from 'react'
import './BasicStyles.css'
import './Gallery.css'
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
            name='Soporte para esponja Homero'
          />

          <GalleryItem
            src='imgs/gallery/amongus2.png'
            alt='amongus among us'
            name='Pica de among us'
          />
        </ul>
      </section>
      
    </>
  )
}

export default NewestContent
