import React from 'react'
import './Programs.css'
import program_1 from '../assets/program-1.png'
import program_2 from '../assets/program-2.png'
import program_3 from '../assets/program-3.png'
import program_1_icon from '../assets/program-icon-1.png'
import program_2_icon from '../assets/program-icon-2.png'
import program_3_icon from '../assets/program-icon-3.png'


const Programs = () => {
  return (
    <div className='programs container'>
      <div className="program"> 
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_1_icon} alt="Graduation Degree" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program"> 
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_2_icon} alt="Masters Degree" />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program"> 
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_3_icon} alt="Post Graduation" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  )
}

export default Programs