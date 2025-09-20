import React from 'react'
import './job-card.css'

interface JobCardProps {
  imageSrc?: string
  imageAlt?: string
  title?: string
  body?: string
}

const JobCard: React.FC<JobCardProps> = (props) => {
  return (
    <div className="job-card-job-card">
      <img 
        alt={props.imageAlt || 'Job Logo'}
        src={props.imageSrc || 'https://placehold.co/10'}
        className='job-card-logo'
      />

      <span className="job-card-title">{"Full-Stack Development Intern"}</span>
      <span className="job-card-body">{"Developed a full-stack Django application that integrated machine learning (TensorFlow) and computer vision (OpenCV) to analyze BART track footage and automatically detect infrastructure defects, demonstrating expertise across both frontend and backend development. I designed and implemented RESTful API routes to connect the user interface with a custom-trained CNN, ensuring seamless, robust feature integration. Working closely with a six-member team, I analyzed existing inspection workflows and delivered a prototype that significantly improved inspection efficiency and accuracy showcasing not only my technical ability but also my collaboration and performance optimization skills."}</span>
    </div>
  )
}

export default JobCard
