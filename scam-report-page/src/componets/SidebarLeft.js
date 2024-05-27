import React from 'react';
import './SidebarLeft.css';
import { IoMdHome } from "react-icons/io";
import { FaPrint } from "react-icons/fa6";
import { VscReport } from "react-icons/vsc";
import { LuUsers } from "react-icons/lu";
import { RiBatteryShareLine } from "react-icons/ri";
import { MdOutlineHowToVote } from "react-icons/md";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { GiDeadlyStrike } from "react-icons/gi";
import avatar from '../Avatars/avatar.jpg'
const SidebarLeft = () => {
  return (
    <nav className="side_navbar">
     
      <><span> <IoMdHome /> Aleart</span></>
      <><span> <FaPrint /> Report Scam</span></>

      <hr />
      <div className='danger_zone'>
      <h4>Danger Zone</h4>
      <div className='sidebar_icons'>
      <a href="#"><VscReport />  Report</a>
      <a href="#"><LuUsers /> User</a>
      <a href="#"><RiBatteryShareLine /> Share</a>
      <a href="#"><MdOutlineHowToVote /> Votes</a>
      <a href="#"><MdOutlineEmojiEvents /> Events</a>
      <a href="#"><GiDeadlyStrike /> Memories</a>
      </div>
     
      </div>
      <hr />
      <div className='Groups_zone'>
      <h4>Groups</h4>
      
      <div className="account">
      <img src={avatar} alt="Avatar" />
        <p>Alert Members</p>
         
        </div>
        <div className="account">
      <img src={avatar} alt="Avatar" />
        <p>Report Scammers</p>
         
        </div>
        <div className="account">
      <img src={avatar} alt="Avatar" />
        <p>Reports Fraudes</p>
         
        </div>
        <div className="account">
      <img src={avatar} alt="Avatar" />
        <p>Scam Wings</p>
         
        </div>

  
     
      </div>
      
    </nav>
  );
};

export default SidebarLeft;
