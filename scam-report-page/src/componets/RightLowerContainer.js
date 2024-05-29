import React from 'react'
import './Container.css'
import avatar from '../Avatars/avatar.jpg';
const RightLowerContainer = () => {
  return (
    <div className='right_lower_container'>
    <h5>Right Lower Container</h5>
    <div className="header_middle">
      <div className="account">
        <img src={avatar} alt="Avatar" />
      </div>
      <div className="heading_header">
        <h4>This is a title</h4>
        <p>This is the title description</p>
      </div>
    </div>
    <div className="header_middle">
      <div className="account">
        <img src={avatar} alt="Avatar" />
      </div>
      <div className="heading_header">
        <h4>This is a title</h4>
        <p>This is the title description</p>
      </div>
    </div>
  </div>
  )
}

export default RightLowerContainer
