import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
              <Link to='/Home' className='link-item'>Inicio</Link>
              <Link to='/About' className='link-item'>Acerca de Nosotros</Link>
              <Link to='/Gallery' className='link-item'>Galeria</Link>
            </div> 
        </nav>
    </>
  )
}

export default NavBar
