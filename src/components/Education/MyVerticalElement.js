import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import BuildIcon from '@mui/icons-material/Build'
function MyVerticalElement(props) {
  return (
    <VerticalTimelineElement
      className='vertical-timeline-element--education'
      iconStyle={{ background: '#dc3545', color: '#ffff' }}
      icon={<BuildIcon />}
      date={props.date}
    >
      <h3 className='vertical-timeline-element-title'>{props.title}</h3>
      <p className='vertical-timeline-element-subtitle'>{props.subtitle}</p>
    </VerticalTimelineElement>
  )
}

export default MyVerticalElement
