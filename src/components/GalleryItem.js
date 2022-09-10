import React from 'react'

function GalleryItem(props) {
  return (
    <>
      <li className='gallery-item'>
        <img src={props.src} alt={props.alt}></img>
      </li>
    </>
  )
}

export default GalleryItem