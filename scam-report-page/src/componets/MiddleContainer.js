import React, { useState } from 'react'
import './Container.css'
import { TfiLayoutMenuSeparated } from 'react-icons/tfi';
import avatar from '../Avatars/avatar.jpg';
import thamnail from '../Thambnail/thambnail.jpg';
import { AiFillLike } from "react-icons/ai";
import { MdDetails } from "react-icons/md";
import { IoNavigateSharp } from "react-icons/io5";

import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

const MiddleContainer = ({likes}) => {
    const [liked, setLiked] =useState(false);
    const [dislike, setDislike]=useState(false)
    
  return (
    <div>
      <div className="middle_container">
    <div className="header_middle">
      <div className="account">
        <img src={avatar} alt="Avatar" />
      </div>
      <div className="heading_header">
        <h4>This is a title</h4>
        <p>This is the title description</p>
      </div>
      <TfiLayoutMenuSeparated className="menu" />
    </div>
    <div className="middle_heading">Hey, this is the file you're looking for now</div>
    <div className="cards_container">
      <div className="card">
        <img src={thamnail} className="card-img-top" alt="..." />
        <div className="card-body"></div>
      </div>
      <div className="card">
        <img src={thamnail} className="card-img-top" alt="..." />
        <div className="card-body"></div>
      </div>
    </div>
    <div className='middle_footer'>
      {liked ? (<AiFillLike fontSize="large" onClick={(e)=>setLiked(false)}/> ) : (<AiOutlineLike fontSize="large" onClick={(e)=>setLiked(true)}/>)}

      <p>{liked ? likes +1 : likes}</p>
      {dislike ? (<AiFillDislike fontSize="large" onClick={(e)=> setDislike(false)} />) : (<AiOutlineDislike fontSize="large" onClick={(e)=> setDislike(true)} />)}
      <h5>Repo</h5>
      <h5>Report</h5>
    </div>
    <div className='middle_footer_left'>
      <MdDetails />
      <h5>Details</h5>
      <h5>View</h5>
      <IoNavigateSharp />
      <h5>Share</h5>
    </div>
  </div>
    </div>
  )
}

export default MiddleContainer;
