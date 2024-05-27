import React from 'react';
import './Container.css';
import avatar from '../Avatars/avatar.jpg';
import { CiImageOn } from 'react-icons/ci';
import { MdOutlineAttachment } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import { BsEmojiSmile } from 'react-icons/bs';
import { TfiLayoutMenuSeparated } from 'react-icons/tfi';
import thamnail from '../Thambnail/thambnail.jpg';
import { AiFillLike } from "react-icons/ai";
import { MdDetails } from "react-icons/md";
import { IoNavigateSharp } from "react-icons/io5";
import { VscReport } from "react-icons/vsc";
import { LuUsers } from "react-icons/lu";
import { RiBatteryShareLine } from "react-icons/ri";
import { MdOutlineHowToVote } from "react-icons/md";
import { MdOutlineEmojiEvents } from "react-icons/md";
const Container = () => {
  return (
    <div className="main-body">
      <div className="promo_card">
        <div className="left_container">
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
          <div className="moddle_container">
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
              <AiFillLike />
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
            <div className="lower_heading">
              Hey, this is the file you're looking for now
            </div>
            <div className="lower_cards_container">
              <div className="lower_card">
                <img src={thamnail} className="lower_card-img-top" alt="..." />
                <div className="card-body"></div>
              </div>
              <div className="lower_card">
                <img src={thamnail} className="lower_card-img-top" alt="..." />
                <div className="card-body"></div>
              </div>
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
          <div className='right_upper_container'>
            <h4>Upcomming alerts</h4>
          <div className="side_upper_headings">
              <div className="account">
                <VscReport />
              </div>
              <div className="heading_header">
                <h4>This is a title</h4>
                <p>This is the title description</p>
              </div>
        
            </div>
            <div className="side_upper_headings">
              <div className="account">
                <LuUsers />
              </div>
              <div className="heading_header">
                <h4>This is a title</h4>
                <p>This is the title description</p>
              </div>
        
            </div>
            <div className="side_upper_headings">
              <div className="account">
                <RiBatteryShareLine />
              </div>
              <div className="heading_header">
                <h4>This is a title</h4>
                <p>This is the title description</p>
              </div>
        
            </div>
            <div className="side_upper_headings">
              <div className="account">
                <MdOutlineAttachment />
              </div>
              <div className="heading_header">
                <h4>This is a title</h4>
                <p>This is the title description</p>
              </div>
        
            </div>

          </div>
          <div className='right_lower_container'>
            <div className='alerts'>
              <h4>Alerts</h4>
              <div className='current_location'>
                   <h5>Current Location</h5>
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
              <div className='nearby_incidence'>
                <h5>NearBy Incidence</h5>
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
              <div className='high_risk_area'>
                <h5>High Risk Area</h5>
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
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
