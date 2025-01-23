import React from 'react'
import InputField from './InputField'
import '../styles/ProjectProposal.css'
import Button from '../components/Botton'
const JobDescription = () => {


  return (
    <div className='JobDescription'>
      <h1>PROJECT INFORMATION</h1>
      
      <div className='jobinfo'>
      <InputField type="Job Title" placeholder="Project Title"/>
      <InputField type="Job Description" placeholder="Required Skills/Technologies"/>
      </div>
      <div className='jobinfo'>
      <InputField type="Company Name" placeholder="MIN Budget$"/>
      <InputField type="Job Title" placeholder="MAX Budget$"/>
      </div>
      <div className='jobinfo'>
      <InputField type="Job Description" placeholder="TimeLimit In Weeks"/>
      <select id="userType" className="dropdown" >
                <option value="skillswapper">Entry-level</option>
                <option value="bidder">Intermediate</option>
                <option value="seller">Expert</option>
      </select>
      </div>
      <div>
      <textarea class="projectinput" placeholder="Enter Project Description"></textarea>
      </div>
      <div className='projectbutton'>
            <Button type='button'>Submit</Button>
      </div>
   
     
      
    </div>
  )
}

export default JobDescription
