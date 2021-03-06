import React from 'react'
import './JobCard.css'
import colorData from '../ColorsData'

const JobCard = ({title, avg_salary, short_description, icon_url, id}) => {
  const num = id - 1
  return (
    <div
      alt='single-job'
      className="individual-job" 
      style={{backgroundColor: colorData[num].color, 
      borderLeft: `2em ${colorData[num].accentColor} solid` }}
    >
      <section className="title-and-icon">
        <img style={{height:'3em'}} src={icon_url} alt='profession-icon' />
        <h3 className="card-title">{title}</h3>
      </section>
      <p data-testid="description" className="card-text-one">Avg Salary: ${avg_salary}</p>
      <p data-testid='short-description' className="card-text-two">{short_description}</p>
    </div>
  )
}

export default JobCard