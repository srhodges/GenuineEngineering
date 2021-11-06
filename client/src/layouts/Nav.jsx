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
        <a href="/post/new">Collaborate</a>
          <div className="dropdown_menu">
        <a href="/post/new">Partner with GE</a>
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
