import React, {useState} from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  return (
    <>
        <header>
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About Me</NavLink></li>
                    <li onMouseEnter={() => {
                        setShowLinks(true);
                        setActiveLink(true);
                      }}
                      onMouseLeave={() => {
                        setShowLinks(false);
                        setActiveLink(false);
                      }}
                      className={activeLink ? "active" : ""}
                    >
                      <NavLink to='/projects'>My Projects</NavLink>
                      {showLinks && (
                        <ul className='dropdown'>
                          <li>
                            <NavLink to='/projects/1'>Florin County Website</NavLink>
                          </li>
                          <li>
                            <NavLink to='/projects/2'>Flipping Flashcards</NavLink>
                          </li>
                          <li>
                            <NavLink to='/projects/3'>Kanban AI</NavLink>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li><NavLink to='/contacts'>Contact Me</NavLink></li>
                </ul>
            </nav>
        </header>
        <Outlet />
    </>
  )
}

export default NavBar
