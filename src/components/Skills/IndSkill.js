import React from 'react'

const IndSkill = (props) => {
  return (
    <div className='col-4 my-3 text-center'>
      <img width={100} src={props.img} alt='img' />
      <h1 className='text-center fs-4 mt-3 fw-bold text-secondary'>
        {props.name}
      </h1>
    </div>
  )
}

export default IndSkill
