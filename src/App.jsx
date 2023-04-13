import React from 'react'
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home'
import Projects from './Pages/Projects';
import ProjectPage from './Pages/ProjectPage';

const App = () => {
  return (
    <Routes>
      <Route path ='/x' element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectPage />} />
        <Route path='/contacts' element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
