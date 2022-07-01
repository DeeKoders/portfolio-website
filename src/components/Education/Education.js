import React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import MyVerticalElement from './MyVerticalElement'

const Education = () => {
  return (
    <div Style='min-height: 100vh'>
      h1
      <VerticalTimeline lineColor='#dc3545'>
        <MyVerticalElement
          title='Bachelors of Software Engineering'
          subtitle='Institute of Management Sciences, Peshawar'
          date='2018-2022'
        />
        <MyVerticalElement
          title='Intermediate in Computer Science'
          subtitle='Fazaia Degree College, Risalpur Cantt'
          date='2016-2018'
        />
        <MyVerticalElement
          title='Secondary School Certificate'
          subtitle='Khyber Model School and College, Nowshera'
          date='2014-2016'
        />
      </VerticalTimeline>
    </div>
  )
}

export default Education
