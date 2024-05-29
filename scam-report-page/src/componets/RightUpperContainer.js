import React from 'react'
import './Container.css'
import avatar from '../Avatars/avatar.jpg';
import { VscReport } from "react-icons/vsc";
import { LuUsers } from "react-icons/lu";
import { RiBatteryShareLine } from "react-icons/ri";
import { MdOutlineHowToVote } from "react-icons/md";



const RightUpperContainer = () => {
  return (
    <div>
      <div className='right_upper_container'>
    <h5>Right Upper Container</h5>
    <div className="header_middle">
    <VscReport />
      <div className="heading_header">
      
        <h4>This is a title</h4>
        <p>This is the title description</p>
      </div>
    </div>
    <div className="header_middle">
    <LuUsers />
      <div className="heading_header">
     
        <h4>This is a title</h4>
        <p>This is the title description</p>
      </div>
    </div>
    <div className="header_middle">
    <MdOutlineHowToVote />
      <div className="heading_header">
      
        <h4>This is a title</h4>
        <p>This is the title description</p>
      </div>
    </div>
    <div className="header_middle">
    <RiBatteryShareLine />
      <div className="heading_header">
      
        <h4>This is a title</h4>
        <p>This is the title description</p>
      </div>
    </div>
  </div>
    </div>
  )
}

export default RightUpperContainer
