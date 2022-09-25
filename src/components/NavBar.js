import React from 'react'
import { Link } from 'react-router-dom'
import './BasicStyles.css'

function toggleNavBar(){
  const nav = document.querySelector('.navbar-container');
  if(window.innerWidth <= 800){
    nav.classList.toggle('nav-container__activado');
  }
}

function NavBar() {
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
              <Link to='/Home' onClick={toggleNavBar} className='link-item'>Inicio</Link>
              <Link to='/About' onClick={toggleNavBar} className='link-item'>Acerca de Nosotros</Link>
              <Link to='/Gallery' onClick={toggleNavBar} className='link-item'>Galeria</Link>
            </div>
            <button className='ham' type='button' onClick={toggleNavBar}>
              <span></span>
              <span></span>
              <span></span>
            </button>
        </nav>
    </>
  )
}



export default NavBar
