import React, {useEffect} from 'react';
import { FaArrowUp, FaArrowDown, FaHome } from 'react-icons/fa';
import style from '../../index.css'

const Home = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

    // useEffect(() => {
    //   const observer = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //       console.log(entry)
    //       if (entry.isIntersecting) {
    //         entry.target.classList.add('show');
    //       } else{
    //         entry.target.classList.remove('show')
    //       }
    //     })
    //   });
  
    //   const hiddenElements = document.querySelectorAll('.hidden, .hidden-right');
    //   hiddenElements.forEach((el) => observer.observe(el));
  
    //   return () => observer.disconnect();
    // }, []);
    useEffect(() => {
      const observer1 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      });
    
      const observer2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      });
    
      const hiddenElements1 = document.querySelectorAll('.hidden');
      hiddenElements1.forEach((el) => observer1.observe(el));
    
      const hiddenElements2 = document.querySelectorAll('.hidden-right');
      hiddenElements2.forEach((el) => observer2.observe(el));
    
      return () => {
        observer1.disconnect();
        observer2.disconnect();
      };
    }, []);
    


  return (
  <> 
    <div className='home' id='home'>
      <img className='hidden' id='logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1682628184/Group_5_1_eq3qr6.png' alt='logo' />
      <ul>
        <li>
          <h1 id='home-header' className='hidden'>
            Welcome to my digital playground where I turn ideas into reality. My name
            is Kay and I can't wait to create something amazing together.
          </h1>
        </li>
      </ul>
      <img id='pic' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1682627268/Subject_3_asrqj0.png'/>
        <span id='about-span' className='hidden' onClick={() => scrollToSection("about")}>
              About Me
        </span>
        <span id='projects-span' className='hidden' onClick={() => scrollToSection("projects")}>
              My Projects
        </span>
        <span id='contact-span' className='hidden' onClick={() => scrollToSection("contact")}>
              Contact Me
        </span>
      {/* <span id='home-to-about' onClick={() => scrollToSection('about')}>
        <FaArrowDown /> About
      </span> */}
    </div>
    <div className='about' id='about'>
      <img className='hidden' id='logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1682628184/Group_5_1_eq3qr6.png' alt='logo' />
      {/* <span className='hidden-right' id='about-to-home' onClick={() => scrollToSection('home')}>
        <FaArrowUp /> Back to Home
      </span> */}
      <div className='hidden'>
        {/* <img id='pic' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1682627104/Subject_2_tjpu6i.png'/> */}
        <h1>About Me</h1>
        <p className='about-p'>Hello and welcome to my About page! I'm a brand-new developer who's just starting out on this exciting journey. I'm constantly pushing myself to grow and expand my knowledge, whether it's through online courses, coding challenges, or collaborating with other developers and I just finished my coding bootcamp with La Fosse. I'm excited to be a part of this vibrant community and can't wait to see where this journey takes me!</p>
      </div>
      
      {/* <span className='hidden-right' id='about-to-projects' onClick={() => scrollToSection('projects')}>
        <FaArrowDown /> My Projects
      </span> */}

    </div>
    <div className='tech' id='tech'>
      <h1>Technologies I use</h1>
      <div id='row-1'>
        <div id='languages'>
          <h3>Languages</h3>
          <div className='container'>
            <div className='child-div'>
              <img className='tech-logo' src='https://cdn.svgporn.com/logos/javascript.svg' title='JavaScript'></img>
              JavaScript
            </div>
            <div className='child-div'>
              <img className='tech-logo' src='https://cdn.svgporn.com/logos/python.svg' title='Python'></img>
              Python
            </div>
          </div>     
        </div>
        <div id='front-end'>
          <h3>Front End</h3>
          <div className='container'>
            <div className='child-div'>
              <img className='tech-logo' src='https://cdn.svgporn.com/logos/react.svg' title='React'></img>
              React
            </div>
            <div className='child-div'>
              <img className='tech-logo' src='https://cdn.svgporn.com/logos/html-5.svg' title='HTML5'></img>
              HTML5
            </div>
            <div className='child-div'>
              <img className='tech-logo' src='https://cdn.svgporn.com/logos/css-3.svg' title='CSS3'></img>
              CSS3
            </div>
            <div className='child-div'>
              <img className='tech-logo' src='https://cdn.svgporn.com/logos/tailwindcss-icon.svg' title='Tailwind'></img>
              Tailwind
            </div>
            <div className='child-div'>
              <img className='tech-logo' src='https://cdn.svgporn.com/logos/bootstrap.svg' title='Bootstrap'></img>
              Bootstrap
            </div>
          </div>      
        </div>
        <div id='back-end'>
          <h3>Back end</h3>
          <div className='container'>
            <div className='child-div'>
              <img className='tech-logo' src='https://cdn.svgporn.com/logos/flask.svg' title='Flask'></img>
              Flask
            </div>
            <div className='child-div'>
              <img className='tech-logo' src='https://cdn.svgporn.com/logos/django-icon.svg' title='Django'></img>
              Django
            </div>
            <div className='child-div'>
              <img className='tech-logo' src='https://cdn.svgporn.com/logos/nodejs-icon.svg' title='NodeJS'></img>
              NodeJS       
            </div>
            <div className='child-div'>
              <img className='tech-logo' src='https://cdn.svgporn.com/logos/express.svg' title='Express'></img>
              Express 
            </div>
          </div>    
        </div>
      </div> 
      <div id='row-2'>
        <div id='virtualization'>
          <h3>Virtualization</h3>
          <div className='container'>
            <div className='child-div'>
              <img className='tech-logo' src='https://cdn.svgporn.com/logos/docker-icon.svg' title='Docker'></img>
              Docker
            </div>
          </div>
        </div>
        <div id='databases'>
          <h3>Databases</h3>
          <div className='container'>
            <div className='child-div'>
              <img className='tech-logo' src='https://cdn.svgporn.com/logos/mongodb-icon.svg' title='MongoDB'></img>
              MongoDB
            </div>
            <div className='child-div'>
              <img className='tech-logo' src='https://cdn.svgporn.com/logos/postgresql.svg' title='PostreSQL'></img>
              PostgreSQL
            </div>
            <div className='child-div'>
              <img className='tech-logo' src='https://cdn.svgporn.com/logos/sqlite.svg' title='SQLite'></img>
              SQLite
            </div>
            
          </div>    
        </div>
        <div id='version'>
          <h3>Version Control</h3>
          <div className='container'>
            <div className='child-div'>
              <img className='tech-logo' src='https://cdn.svgporn.com/logos/git-icon.svg' title='Git'></img>
              Git
            </div>
            <div className='child-div'>
              <img className='tech-logo' src='https://cdn.svgporn.com/logos/github-icon.svg' title='Github'></img>
              Github
            </div>
          </div>
        </div>
        <div id='testing'>
          <h3>Testing</h3>
          <div className='container'>
            <div className='child-div'>
              <img className='tech-logo' src='https://cdn.svgporn.com/logos/jest.svg' title='Jest'></img>
              Jest
            </div>
            <div className='child-div'>
              <img className='tech-logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1682847452/pytest_zbwuei.png' title='Pytest'></img>
              Pytest
            </div>
          </div>    
        </div>
      </div>
      
      {/* <div id='tech-i-use'>
      </div> */}
    </div>
      <div className="projects" id='projects'>
        {/* <img className='hidden' id='logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1682352608/Group_5_dug4m9.png' alt='logo' /> */}
        {/* <span className='hidden-right' id='projects-to-about' onClick={() => scrollToSection('about')}>
          <FaArrowUp /> About Me
        </span> */}
        <h2 id='header-projects' className='hidden-right'>Let me walk you through my latest projects:</h2>
        <div className='projects-main'>
          <div className='flex-row-p' id='project-3'>
          <a href="https://github.com/kay-dev-uk/Kanban-AI" target="_blank"><img className='hidden' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1681999938/Screenshot_2023-04-20_at_12.52.57_c4nnq6.png' alt='Landing Page for Kanban AI' /></a>
            <div className='hidden-right'>
              <h2>Kanban AI</h2>
              <p>We are proud to present our state-of-the-art Kanban Board, featuring cutting-edge AI technology that is sure to streamline any workload and enhance productivity and innovation. Our Kanban Board boasts an array of powerful AI features that allow Product Owners to effortlessly break down large tasks into smaller, more manageable ones for their development team.</p>
              <div className='button-container'>
                <a href="https://github.com/kay-dev-uk/Kanban-AI" target="_blank"><button>GitHub</button></a>
                <a href="https://built-differently.onrender.com/" target="_blank"><button>Deployment</button></a>
              </div>
            </div>
          </div>
          <div className='flex-row-reverse-p' id='project-2'>
            <a href="https://github.com/kay-dev-uk/flipping-flashcards" target="_blank"><img className='hidden-right' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1682340147/Flipping-2_xu7xja.png' alt='Main page of Flipping Flashcards' /></a>
            <div className='hidden'>
              <h2>Flipping Flashcards</h2>
              <p>Introducing Flipping Flashcards, an innovative and cutting-edge study tool that revolutionizes the traditional approach to revision. With its dynamic flip action, Flipping Flashcards provides a unique and engaging way to enhance your learning experience.</p>
              <div className='button-container'>
                <a href="https://github.com/kay-dev-uk/flipping-flashcards" target="_blank"><button>GitHub</button></a>
              </div>
            </div>
          </div>
          <div className='flex-row-p' id='project-1'>
            <a href="https://github.com/kay-dev-uk/florin-events" target="_blank"><img className='hidden' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1681987403/Florin-1_h0ef8h.png' alt='Main page of Florin Events' /></a>
            <div className='hidden-right'>
              <h2>Florin Events</h2>
              <p>The Florin Events App is a web application that allows users to create events, view other people's events, and declare interest in attending events. Users can view events by category and search for events using the search bar. The application was created to help a struggling county council that was struggling with funding issues.</p>
              <div className='button-container'>
                <a href="https://github.com/kay-dev-uk/florin-events" target="_blank"><button>GitHub</button></a>
                <a href="https://florin-events.onrender.com/" target="_blank"><button>Deployment</button></a>
              </div>
            </div>
          </div>
        </div>
        {/* <span id='projects-to-contacts' className='hidden-right' onClick={() => scrollToSection('contact')}>
          <FaArrowDown /> Contact Me
        </span> */}
      </div>
    <div className='contact' id='contact'>
      <img className='hidden' id='logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1682628184/Group_5_1_eq3qr6.png' alt='logo' />
      {/* <span id='contact-to-projects' className='hidden-right' onClick={() => scrollToSection('projects')}>
        <FaArrowUp /> My Projects
      </span> */}
      <ul>
        <li className='hidden-right' id='linkedin'>
          <a href="https://www.linkedin.com/in/kyrylo-rybalko-03a62b178/" target="_blank">My LinkedIn<img id='linkedin-logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1682354432/Group_6_1_fitciw.png'/></a>
          
        </li>
        <li className='hidden' id='profile'>
          <a href="https://cohorts.getfutureproof.co.uk/lamarr/kyrylorybalko" target="_blank"><img src=''/>LaFosse Profile<img id='lafosse-logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1682369134/Group_7_1_ngclan.png' /></a>
        </li>
        <li className='hidden-right' id='github'>
          <a href="https://github.com/kay-dev-uk" target="_blank">My GitHub<img id='github-logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1682369316/Group_8_akx0an.png'/></a>
        </li>
        <li className='hidden' id='cv'>
          <a href="src/assets/cv.pdf" target="_blank">My CV<img id='github-logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1682369316/Group_8_akx0an.png'/></a>
        </li>
      </ul>
      <span className='hidden-right' id='contact-to-home' onClick={() => scrollToSection('home')}>
        <FaHome /> Back to Top
      </span>
    </div>
  </>
  )
}

export default Home
