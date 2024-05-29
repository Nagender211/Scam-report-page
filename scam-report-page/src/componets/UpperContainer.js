import React from 'react'
import './Container.css'
import avatar from '../Avatars/avatar.jpg';
import { CiImageOn } from 'react-icons/ci';
import { MdOutlineAttachment } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import { BsEmojiSmile } from 'react-icons/bs';
const UpperContainer = () => {
  return (
    <div className="upper_container">
    <div className="header_upper">
      <div className="account">
        <img src={avatar} alt="Avatar" />
      </div>
      <input type="text" placeholder="Search Scam" className="input_tag" />
    </div>
    <div className="upper_footer">
      <CiImageOn />
      <MdOutlineAttachment />
      <CiLocationOn />
      <BsEmojiSmile />
      <button className="btn">Submit</button>
    </div>
  </div>
  )
}

export default UpperContainer
