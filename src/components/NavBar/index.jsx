import React, {useState} from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setShowLinks(false);
    setActiveLink(false);
  };

  return (
    <>
        <header>
            <nav>
                <ul>
                    <li><span onClick={() => scrollToSection('home')}>
                        Home
                      </span></li>
                    <li><span onClick={() => scrollToSection('about')}>
                        About Me
                      </span></li>
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
                      <span onClick={() => scrollToSection('projects')}>
                        My Projects
                      </span>
                      {showLinks && (
                        <ul className='dropdown'>
                          {/* <li>
                            <NavLink to='/projects/1'>Florin Events</NavLink>
                          </li>
                          <li>
                            <NavLink to='/projects/2'>Flipping Flashcards</NavLink>
                          </li>
                          <li>
                            <NavLink to='/projects/3'>Kanban AI</NavLink>
                          </li> */}
                        </ul>
                      )}
                    </li>
                    <li>
                      <span onClick={() => scrollToSection('contact')}>
                        Contact Me
                      </span>
                    </li>
                </ul>
            </nav>
        </header>
        <Outlet />
    </>
  )
}

export default NavBar
