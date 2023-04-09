import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <header>
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About Me</NavLink></li>
                    <li><NavLink to='/projects'>My Projects</NavLink></li>
                    <li><NavLink to='/contacts'>Contact Me</NavLink></li>
                </ul>
            </nav>
        </header>
        <Outlet />
    </>
  )
}

export default NavBar
