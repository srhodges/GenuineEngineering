import './Sidebar.css'
import React from 'react'

import avatar from '../assets/img/avatar.jpg'
// import resume from '../assets/resume.pdf'

const Sidebar = () => {
  const handleEmailMe = () => {
      window.open("mailto:srhodges@pm.me")
  }
  return (
      <div className="sidebar">
          <img src={avatar} alt="avatar" className="sidebar_avatar" />
          <div className="sidebar_name">Stephanie Hodges</div>
          <div className="sidebar_title">Software Developer</div>
          <div className="sidebar_location">Seattle, Washington</div>
              <div className="sidebar_contact">srhodges@pm.me</div>
        <div className="sidebar_contact">4044044040</div>
        <div className="resume">

          <h2> Industry Knowledge </h2>
          <p>
            Product Design
            <br/>
            User Interface
            <br/>
            User Experience
            <br/>
            Interactive Design
            <br/>
            Wireframing
            <br/>
            Design Research
            <br/>
          Backend Auth
          </p>

          <h2>
          Libaries & Tools
          </h2>
          <p>
            Figma, Sketch, Google Analytics
            <br />
            Chrome Dev Tools
          </p>
          <h2>
          Skills
          </h2>
          <p>
          HTML, CSS, jQuery
        </p>
        
          <h2>
          Social
          </h2>
          <div>
          <a href=" https://github.com/srhodges" target="_blank">Github</a>
          <a href="https://www.linkedin.com/in/srhodges/" target="_blank">LinkedIn</a>
          </div>


          </div>
          <div className="sidebar_email" onClick={handleEmailMe}>email me</div>
      </div>
  )
}

export default Sidebar;