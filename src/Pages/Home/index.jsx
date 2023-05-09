import React, {useEffect} from 'react';
import { FaHome } from 'react-icons/fa';

const Home = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

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
      <img className='hidden-right' id='pic' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1682627268/Subject_3_asrqj0.png'/>
    </div>
    <div id='home-spans'>
        <span id='about-span' className='hidden-right' onClick={() => scrollToSection("about")}>
              About Me
        </span>
        <span id='tech-span' className='hidden-right' onClick={() => scrollToSection("tech")}>
              My Stack
        </span>
        <span id='projects-span' className='hidden-right' onClick={() => scrollToSection("projects")}>
              My Projects
        </span>
        <span id='contact-span' className='hidden-right' onClick={() => scrollToSection("contact")}>
              Contact Me
        </span>
    </div>
    <div className='about' >
      <div id='about'>
        <img className='hidden' id='logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1682628184/Group_5_1_eq3qr6.png' alt='logo' />
        <div className='hidden'>
          <h1>About Me</h1>
          <p className='about-p'>Hello and welcome to my About page! I'm a brand-new developer who's just starting out on this exciting journey. I'm constantly pushing myself to grow and expand my knowledge, whether it's through online courses, coding challenges, or collaborating with other developers and I just finished my coding bootcamp with La Fosse. I'm excited to be a part of this vibrant community and can't wait to see where this journey takes me!</p>
        </div>

      </div>
      <div>

      </div>
      
    </div>
    <div className='tech' id='tech'>
      <h1 className='hidden'>Technologies I use</h1>
      <div id='row-1'>
        <div id='languages' className='hidden'>
          <h3>Languages</h3>
          <div className='container'>
            <div className='child-div'>
              <img className='tech-logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452210/javascript_pp0zjv.svg' title='JavaScript'></img>
              JavaScript
            </div>
            <div className='child-div'>
              <img className='tech-logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452197/python_evu9so.svg' title='Python'></img>
              Python
            </div>
          </div>     
        </div>
        <div id='front-end' className='hidden'>
          <h3>Front End</h3>
          <div className='container'>
            <div className='child-div'>
              <img className='tech-logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452182/react_hwybaa.svg' title='React'></img>
              React
            </div>
            <div className='child-div'>
              <img className='tech-logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452115/html-5_zhw0y5.svg' title='HTML5'></img>
              HTML5
            </div>
            <div className='child-div'>
              <img className='tech-logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452099/css-3_fi9cle.svg' title='CSS3'></img>
              CSS3
            </div>
            <div className='child-div'>
              <img className='tech-logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452084/tailwindcss-icon_vryuon.svg' title='Tailwind'></img>
              Tailwind
            </div>
            <div className='child-div'>
              <img className='tech-logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452067/bootstrap_vonqqf.svg' title='Bootstrap'></img>
              Bootstrap
            </div>
          </div>      
        </div>
        <div id='back-end' className='hidden-right'>
          <h3>Back end</h3>
          <div className='container'>
            <div className='child-div'>
              <img className='tech-logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452051/flask_ie5jb2.svg' title='Flask'></img>
              Flask
            </div>
            <div className='child-div'>
              <img className='tech-logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452032/django-icon_uk4wsp.svg' title='Django'></img>
              Django
            </div>
            <div className='child-div'>
              <img className='tech-logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452012/nodejs-icon_yqz6fc.svg' title='NodeJS'></img>
              NodeJS       
            </div>
            <div className='child-div'>
              <img className='tech-logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683451852/express_kly0nt.svg' title='Express'></img>
              Express 
            </div>
          </div>    
        </div>
        <div id='virtualization' className='hidden'>
          <h3>Virtualization</h3>
          <div className='container'>
            <div className='child-div'>
              <img className='tech-logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683451888/docker-icon_rt9pnh.svg' title='Docker'></img>
              Docker
            </div>
          </div>
        </div>
        <div id='databases' className='hidden'>
          <h3>Databases</h3>
          <div className='container'>
            <div className='child-div'>
              <img className='tech-logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683451907/mongodb-icon_cmsasc.svg' title='MongoDB'></img>
              MongoDB
            </div>
            <div className='child-div'>
              <img className='tech-logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683451924/postgresql_qckumv.svg' title='PostreSQL'></img>
              PostgreSQL
            </div>
            <div className='child-div'>
              <img className='tech-logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683451940/sqlite_om5rbl.svg' title='SQLite'></img>
              SQLite
            </div>     
          </div>    
        </div>
        <div id='version' className='hidden-right'>
          <h3>Version Control</h3>
          <div className='container'>
            <div className='child-div'>
              <img className='tech-logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683451957/git-icon_vknstp.svg' title='Git'></img>
              Git
            </div>
            <div className='child-div'>
              <img className='tech-logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683451973/github-icon_puneos.svg' title='Github'></img>
              Github
            </div>
          </div>
        </div>
        <div id='testing' className='hidden-right'>
          <h3>Testing</h3>
          <div className='container'>
            <div className='child-div'>
              <img className='tech-logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683451991/jest_udx4sn.svg' title='Jest'></img>
              Jest
            </div>
            <div className='child-div'>
              <img className='tech-logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1682847452/pytest_zbwuei.png' title='Pytest'></img>
              Pytest
            </div>
          </div>    
        </div>
      </div>
    </div>
      <div className="projects" id='projects'>
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
      </div>
    <div className='contact' id='contact'>
      <img className='hidden' id='logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1682628184/Group_5_1_eq3qr6.png' alt='logo' />
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
          <a href="https://gray-jewelle-23.tiiny.site/" target="_blank">My CV<img id='github-logo' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1682865015/Group_10_cemcdl.png'/></a>
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
