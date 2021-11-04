import './Nav.css'

const Nav = () => {
  

    return (
      <div className="nav">
        <nav>
  <ul>
    <li className="dropdown">
        <a href="#">Portfolio</a>
    </li>
    <li className="dropdown">
        <a to="/collaborate">Collaborate</a>
          <div className="dropdown_menu">
        <a to="/posts">Partner with GE</a>
      </div>
    </li>
    <li className="dropdown">
      <a href="#">About GE</a>
          <div className="dropdown_menu">
      <a href="#">Contact</a>
      </div>
    </li>
  </ul>     
        </nav>
            </div>
    )
}

export default Nav
