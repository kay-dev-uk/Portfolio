import React from 'react';
import { FaArrowUp, FaArrowDown, FaHome } from 'react-icons/fa';

const Home = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
  <> 
    <div className='home' id='home'>
      <ul>
        <li>
          <h1 id='home-header'>
            Welcome to my digital playground where I turn ideas into reality. My name
            is Kay and I can't wait to create something amazing together.
          </h1>
        </li>
      </ul>
      <div className="nav-links">
        <span onClick={() => scrollToSection("about")}>
              About Me
        </span>
        <span onClick={() => scrollToSection("projects")}>
              My Projects
        </span>
        <span onClick={() => scrollToSection("contact")}>
              Contact Me
        </span>
      </div>
      <span id='home-to-about' onClick={() => scrollToSection('about')}>
        <FaArrowDown /> About
      </span>
    </div>
    <div className='about' id='about'>
      <span id='about-to-home' onClick={() => scrollToSection('home')}>
        <FaArrowUp /> Back to Home
      </span>
      <div>
        <h1>About Me</h1>
        <p className='about-p'>Hello and welcome to my About page! I'm a brand-new developer who's just starting out on this exciting journey. I'm constantly pushing myself to grow and expand my knowledge, whether it's through online courses, coding challenges, or collaborating with other developers and I just finished my coding bootcamp with La Fosse. I'm excited to be a part of this vibrant community and can't wait to see where this journey takes me!</p>
      </div>
      <span id='about-to-projects' onClick={() => scrollToSection('projects')}>
        <FaArrowDown /> My Projects
      </span>
    </div>
      <div className="projects" id='projects'>
        <span id='projects-to-about' onClick={() => scrollToSection('about')}>
          <FaArrowUp /> About Me
        </span>
        <h2 id='header-projects'>Let me walk you through my latest projects:</h2>
        <div className='projects-main'>
          <div className='flex-row-p' id='project-1'>
            <img src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1681987403/Florin-1_h0ef8h.png' alt='image1' />
            <div>
              <h2>Florin Events</h2>
              <p>The Florin Events App is a web application that allows users to create events, view other people's events, and declare interest in attending events. Users can view events by category and search for events using the search bar. The application was created to help a struggling county council that was struggling with funding issues.</p>
              <div className='button-container'>
                <a href="https://github.com/kay-dev-uk/florin-events" target="_blank"><button>GitHub</button></a>
                <a href="https://florin-events.onrender.com/" target="_blank"><button>Deployment</button></a>
              </div>
            </div>
          </div>
          <div className='flex-row-reverse-p' id='project-2'>
            <img src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1681986200/Flipping-2_stdkkm.png' alt='image2' />
            <div>
              <h2>Flipping Flashcards</h2>
              <p>Introducing Flipping Flashcards, an innovative and cutting-edge study tool that revolutionizes the traditional approach to revision. With its dynamic flip action, Flipping Flashcards provides a unique and engaging way to enhance your learning experience.</p>
              <div className='button-container'>
                <a href="https://github.com/kay-dev-uk/flipping-flashcards" target="_blank"><button>GitHub</button></a>
              </div>
            </div>
          </div>
          <div className='flex-row-p' id='project-3'>
          <img src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1681999938/Screenshot_2023-04-20_at_12.52.57_c4nnq6.png' alt='image3' />
            <div>
              <h2>Kanban AI</h2>
              <p>We are proud to present our state-of-the-art Kanban Board, featuring cutting-edge AI technology that is sure to streamline any workload and enhance productivity and innovation. Our Kanban Board boasts an array of powerful AI features that allow Product Owners to effortlessly break down large tasks into smaller, more manageable ones for their development team.</p>
              <div className='button-container'>
                <a href="https://github.com/kay-dev-uk/Kanban-AI" target="_blank"><button>GitHub</button></a>
                <a href="https://built-differently.onrender.com/" target="_blank"><button>Deployment</button></a>
              </div>
            </div>
          </div>
        </div>
        <span id='projects-to-contacts' onClick={() => scrollToSection('contact')}>
          <FaArrowDown /> Contact Me
        </span>
      </div>
    <div className='contact' id='contact'>
      <span id='contact-to-projects' onClick={() => scrollToSection('projects')}>
        <FaArrowUp /> My Projects
      </span>
      <ul>
        <li id='linkedin'>
          <a href="https://www.linkedin.com/in/kyrylo-rybalko-03a62b178/" target="_blank">My LinkedIn</a>
        </li>
        <li id='profile'>
          <a href="https://cohorts.getfutureproof.co.uk/lamarr/kyrylorybalko" target="_blank">LaFosse Profile</a>
        </li>
        <li id='github'>
          <a href="https://github.com/kay-dev-uk" target="_blank">My GitHub</a>
        </li>
      </ul>
      <span id='contact-to-home' onClick={() => scrollToSection('home')}>
        <FaHome /> Back to Top
      </span>
    </div>
  </>
  )
}

export default Home
