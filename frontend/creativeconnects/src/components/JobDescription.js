import React from 'react'
import InputField from './InputField'
import '../styles/JobDescription.css'
import Button from '../components/Botton'
const JobDescription = () => {


  return (
    <div className='JobDescription'>
      <h1>JOB INFORMATION</h1>
      
      <div className='jobinfo'>
      <InputField type="Job Title" placeholder="Job Title"/>
      <InputField type="Job Description" placeholder="Working Hours"/>
      </div>
      <div className='jobinfo'>
      <InputField type="Company Name" placeholder="Company Name"/>
      <InputField type="Job Title" placeholder="Educational Background "/>
      </div>
      <div className='jobinfo'>
      <InputField type="Company Name" placeholder="Required Skills/Qualifications"/>
      </div>
      <div>
      <textarea class="projectinput" placeholder="Enter Job Description"></textarea>
      </div>
      <select id="userType" className="dropdown" >
                <option value="skillswapper">Remote</option>
                <option value="bidder">On-site</option>
                <option value="seller">Hybrid</option>
      </select>
      <div className='jobinfo'>
      
          <Button type="button">
            SUBMIT
            </Button>            
      </div>


      
    </div>
  )
}

export default JobDescription
