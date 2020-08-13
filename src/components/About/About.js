import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FaSuitcase, FaUserGraduate, FaUser, FaHandsHelping } from 'react-icons/fa';
import 'react-vertical-timeline-component/style.min.css';
import styles from './About.module.css';
import data from '../../data/about';

const getIconByType = (type) => {
  switch (type) {
    case 'work':
      return <FaSuitcase/>;
    case 'study':
      return <FaUserGraduate/>;
    case 'volunteer':
      return <FaHandsHelping/>;
    default:
      return <FaUser/>;
  }
}

const About = () => {
  return (
    <VerticalTimeline
      className={styles.timeline}
      style={{padding: 0}}
    >
      {
        data && data.map((entry) => 
          <VerticalTimelineElement
            key={entry.place}
            contentStyle={entry.contentStyle}
            contentArrowStyle={entry.contentArrowStyle}
            date={entry.date}
            iconStyle={entry.iconStyle}
            icon={getIconByType(entry.type)}
          >
            <h3 className="vertical-timeline-element-title">{entry.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{entry.place}</h4>
            <p>
              {entry.description}
            </p>
          </VerticalTimelineElement>
        )
      }
      <VerticalTimelineElement
        icon={getIconByType('user')}
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
      >
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
};

export default About;