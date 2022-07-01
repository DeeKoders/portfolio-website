import React from 'react'
import image from '../../images/danyal.jpg'
const Skills = () => {
  return (
    <div className='container' Style='min-height: 100vh'>
      <h1 className='text-center mt-5'>Skills</h1>
      <div className='col-3'>
        <img Style='max-width: 100%' src={image} alt='' />
      </div>
    </div>
  )
}

export default Skills
