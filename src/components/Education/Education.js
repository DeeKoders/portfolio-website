import React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { EducationList } from '../../helpers/EducationList'
import MyVerticalElement from './MyVerticalElement'

const Education = () => {
  return (
    <div Style='min-height: 100vh'>
      <h1 className='text-uppercase text-center fw-bold mt-5'>My Education</h1>
      <hr className='mb-5' />
      <VerticalTimeline lineColor='#dc3545'>
        {EducationList.map((item) => {
          return <MyVerticalElement key={item.id} {...item} />
        })}
      </VerticalTimeline>
    </div>
  )
}

export default Education
