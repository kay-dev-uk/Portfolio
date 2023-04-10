import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectPage = () => {
    let { id } = useParams();
  return (
    <div className="project-page">{id}</div>
  )
}

export default ProjectPage
