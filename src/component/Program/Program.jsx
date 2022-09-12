import React from 'react'
import './Program.css'
import {programsData} from '../../data/programData'
import RightArrow from '../../assets/rightArrow.png'


const  Program = () => {
  return (
    <div className="Programs" id='programs'>

     {/* header */}


     <div className="programs-header">
          <span className='stroke-text'>Explore our</span>
          <span>Programs</span>
          <span className='stroke-text'>to shape you</span>
     </div>
    
    <div className="programs-catogries">
      {programsData.map((programs)=>
      <div className="category">
        {programs.image}
        <span>{programs.heading}</span>
        <span>{programs.details}</span>
        <div className="join-now">
          <span>Join now </span>
          <img src={RightArrow} alt="" />
        </div>
      </div>
      )}

    </div>

  </div>
  )

}



export default Program
