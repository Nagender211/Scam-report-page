import React from 'react'
import './Container.css'
import { TfiLayoutMenuSeparated } from 'react-icons/tfi';
import avatar from '../Avatars/avatar.jpg';
import thamnail from '../Thambnail/thambnail.jpg';
const LowerContainer = () => {
  return (
    <div className="lower_container">
    <div className="header_middle">
      <div className="account">
        <img src={avatar} alt="Avatar" />
      </div>
      <div className="heading_header">
        <h4>This is a title</h4>
        <p>This is the title description</p>
      </div>
      <TfiLayoutMenuSeparated className="lower_header_side_icon" />
    </div>
    <div className="lower_heading">Hey, this is the file you're looking for now</div>
    <div className="lower_cards_container">
      <div className="lower_card">
        <img src={thamnail} className="lower_card-img-top" alt="..." />
        <div className="card-body"></div>
      </div>
      <div className="lower_card">
        <img src={thamnail} className="lower_card-img-top" alt="..." />
        <div className="card-body"></div>
      </div>
    </div>
    
  </div>
  )
}

export default LowerContainer
