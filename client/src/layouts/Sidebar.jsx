import './Sidebar.css'
import React from 'react'

import avatar from '../assets/img/avatar.jpg'
// import resume from '../assets/resume.pdf'

const Sidebar = () => {
  const handleEmailMe = () => {
      window.open("srhodges@pm.me")
  }
  return (
      <div className="sidebar">
          <img src={avatar} alt="avatar" className="sidebar_avatar" />
          <div className="sidebar_name">Stephanie <span>Hodges</span> </div>
          <div className="sidebar_title">Software Developer</div>
          <div className="sidebar_contact">
                  {/* <a href=""><img src={github} alt="github"/>github</a> */}
              <div className="sidebar_location">
                  {/* <img src={pin} alt="location"/> */}
                  Seattle, Washington</div>
              <div className="sidebar_item">srhodges@pm.me</div>
        <div className="sidebar_item">4044044040</div>
        <div className="resume">

          <h3> Industry Knowledge </h3>
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

          <h3>
          Libaries & Tools
          </h3>
          <p>
            Figma, Sketch, Google Analytics
            <br />
            Chrome Dev Tools
          </p>
          <h3>
          Skills
          </h3>
          <p>
          HTML, CSS, jQuery
          </p>


          <h3>
          Social
          </h3>
          <p>
          github
          linkedin.com
          </p>

</div>
          </div>
          <div className="sidebar_email" onClick={handleEmailMe}>email me</div>
      </div>
  )
}

export default Sidebar;