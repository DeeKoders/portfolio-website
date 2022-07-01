import React from 'react'
import img from '../../images/danyal.png'
import TypewriterComponent from 'typewriter-effect'
const Home = () => {
  return (
    <div
      className='row border-bottom border-5 border-secondary border-opacity-50'
      Style='min-height: 90vh'
    >
      <div className='col-12 col-md-6 px-5 mt-5 pt-3'>
        <h1 className='row text-dark opacity-75 fs-4 mt-5 pt-5'>
          Hello World !!!
        </h1>
        <div className='row'>
          <h1 className='col-12 col-md-1 px-0 mx-0 fs-1'>I'm </h1>
          <h1 className='col-12 col-md-10 px-0 mx-md-4 mx-0 fw-bold fs-1 text-danger'>
            Danyal Ahmad
          </h1>
        </div>
        <div className='row'>
          <div className='col-12 col-md-4 px-0 mx-0 fw-bold fs-1 text-danger'>
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString('React JS')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('Flutter')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('React JS')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('Flutter')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('React JS')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('Flutter')
                  .pauseFor(2000)
                  .deleteAll()
                  .start()
              }}
            />
          </div>

          <h1 className='col-12 col-md-6 px-0 mx-0 mt-1 fs-1 '>Developer</h1>
        </div>
        <div className=' row mt-5'>
          <h1 className='col-12 col-md-5 px-0 mx-0 fs-4'>
            Currently working at
          </h1>
          <h1 className='col-12 col-md-4 fw-bold mx-0 px-0 fs-4 text-danger'>
            ProductBox
          </h1>
        </div>
        <div className='row'>
          <h1 className='col-12 px-0 mx-0 col-md-1 fs-4'>As</h1>
          <h1 className='col-12 col-md-8 mx-0 px-0 fw-bold fs-4 text-danger'>
            Associate Full Stack Enginner Intern
          </h1>
        </div>
      </div>
      <div
        Style='overflow: hidden'
        id='image'
        className='col-5 px-2 border bg-danger bg-opacity-75 border rounded-pill'
      >
        <img Style='height: 90vh' src={img} alt='' />
      </div>
    </div>
  )
}

export default Home
