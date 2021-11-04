import './Nav.css'

const Nav = (props) => {
  
  

    return (
      <div className="nav">
        <nav>
  <ul>
    <li className="dropdown">
        <a href="/portfolio">Portfolio</a>
    </li>
    <li className="dropdown">
        <a href="/collaborate">Collaborate</a>
          <div className="dropdown_menu">
        <a href="/portfolio">Partner with GE</a>
      </div>
    </li>
    <li className="dropdown">
      <a href="/more">About GE</a>
          <div className="dropdown_menu">
      <a href="/contact">Contact</a>
      </div>
    </li>
          </ul>
          
        </nav>
            </div>
    )
}

export default Nav
