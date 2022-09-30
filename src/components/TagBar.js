import React from 'react'

function TagBar(props) {
  return (
    <>
        <ul className='tags'>
          <li>{props.tag1}</li>
          <li>{props.tag2}</li>
          <li>{props.tag3}</li>
          <li>{props.tag4}</li>
        </ul>
    </>
  )
}

export default TagBar
