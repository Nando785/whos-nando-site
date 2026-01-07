import React from 'react'
import './job-card.css'

interface JobCardProps {
  imageSrc?: string
  imageAlt?: string
  description?: string
  title?: string
}

const JobCard: React.FC<JobCardProps> = (props) => {
  return (
    <div className="job-card-job-card">
      <img 
        alt={props.imageAlt || 'Job Logo'}
        src={props.imageSrc || 'https://placehold.co/10'}
        className='job-card-logo'
      />

      <span className="job-card-title">{props.title}</span>
      <span className="job-card-body">{props.description}</span>
    </div>
  )
}

export default JobCard
