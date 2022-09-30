import React from 'react'
import Data from '../data.json'
import { Link } from 'react-router-dom'

function Gallery() {

  return (
    <>   
      <div className='main-container'>
        {Data.map(item=>(
          <div key={item.id}>
            <Link to={`/productos/${item.id}`} alt='product'>
              <img src={item.src} alt={item.name}/>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default Gallery
