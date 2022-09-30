import React from 'react'
import { useParams } from 'react-router-dom';
import Data from '../data.json'

function ProductDetail() {
  
  const current = useParams();
  const founditem = Data.find(element => (element.id === parseInt(current.id)));

   return (
    <>
      <div className='productos'>
        <h1>{founditem.name}</h1>
        <div>{`el precio es ${founditem.price}`}</div>
        <img src={founditem.src} alt={founditem.name} />
        
      </div>
    </>
  )
}

export default ProductDetail
