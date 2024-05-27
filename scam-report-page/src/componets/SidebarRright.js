import React from 'react'
import './SidebarRight.css'
import avatar from "../Avatars/avatar.jpg"

const SidebarRight = () => {
  return (
    <div className='sidebarRight'>

      <div className='safety_update'>
        <h4>Safety Update</h4>

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
      </div>

      <div className='aleart_Community'>
        <h4>Alert Community</h4>

        <div className="account">
          <img src={avatar} alt="Avatar" />
          <p>Report scam</p>
        </div>
        <div className="account">
          <img src={avatar} alt="Avatar" />
          <p>Fraud Awareness</p>
        </div>
        <div className="account">
          <img src={avatar} alt="Avatar" />
          <p>Bearer of</p>
        </div>
        <div className="account">
          <img src={avatar} alt="Avatar" />
          <p>Scan Transactions</p>
        </div>
      </div>

      <div className='Stay_villageint_online'>
        <h4>Stay Vigilant Online</h4>

        <div className="account">
          <img src={avatar} alt="Avatar" />
          <p>Report Suspicious</p>
        </div>
        <div className="account">
          <img src={avatar} alt="Avatar" />
          <p>Stay Informed On</p>
        </div>
        <div className="account">
          <img src={avatar} alt="Avatar" />
          <p>Be Cautious Online</p>
        </div>
        <div className="account">
          <img src={avatar} alt="Avatar" />
          <p>Protect Yourself</p>
        </div>
        <div className="account">
          <img src={avatar} alt="Avatar" />
          <p>Stay Alert Report</p>
        </div>
      </div>

    </div>
  )
}

export default SidebarRight
