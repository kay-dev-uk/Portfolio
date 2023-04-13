import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='projects'>
      <h2 id='projects-header'>Let me walk you through my latest projects:</h2>
      <div>
        <div className='flex-row-p' id='project-1'>
          <img src='src/assets/pic.png' alt='image1' />
          <div>
            <h2>Florin Events</h2>
            <p>The Florin Events App is a web application that allows users to create events, view other people's events, and declare interest in attending events. Users can view events by category and search for events using the search bar. The application was created to help a struggling county council that was struggling with funding issues. The project was built using HTML, CSS, JavaScript, and SQL and consists of both a frontend and a backend.</p>
            <div className='button-container'>
              <button><NavLink to='/projects/1'>More</NavLink></button>
              <button><a href="">GitHub</a></button>
            </div>
          </div>
          
        </div>
        <div className='flex-row-reverse-p' id='project-2'>
          <img src='src/assets/pic.png' alt='image2' />
          <div>
            <h2>Flipping Flashcards</h2>
            <p>Flipping Flashcards revolutionises the way you study, offering an innovative and dynamic way to revise. Our app covers a wide range of subjects, including History, Geography, Maths, Language, and Art, ensuring that you have everything you need to succeed. But what if you don't like our questions? We understand that everyone has different preferences, which is why we've created a page where you can create your own custom questions. With Flipping Flashcards, the possibilities are endless. And if you prefer to have full control over your content, you can easily host the app on your own. Flipping Flashcards is designed with simplicity and ease of use in mind, making it a perfect addition to any study routine.</p>
            <div className='button-container'>
              <button><NavLink to='/projects/2'>More</NavLink></button>
              <button><a href="">GitHub</a></button>
            </div>
          </div>
        </div>
        <div className='flex-row-p' id='project-3'>
        <img src='src/assets/pic.png' alt='image3' />
          <div>
            <h2>Kanban AI</h2>
            <p>Introducing our Kanban Board with AI capabilities. Say goodbye to manual task allocation and testing as our board automates those for you, freeing up more time for innovation and creativity. With seamless integration with GitHub and StackOverflow, and an admin dashboard to keep track of assigned tasks, our Kanban Board is the ultimate productivity and project management tool. Plus, with email notifications, you'll never miss a blocker or important update again. Experience the power of AI in your workflow today.</p>
            <div className='button-container'>
              <button><NavLink to='/projects/3'>More</NavLink></button>
              <button><a href="">GitHub</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Projects
