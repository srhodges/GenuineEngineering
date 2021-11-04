import './Layout.css'
import Sidebar from './Sidebar';
import Nav from './Nav';
import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { children, currentUser, handleLogout } = props;

  return (
    <div className="grid-container">
      <header className="header">
        <h1>Genuine Engineering</h1>
      </header>
      <Nav />
      {currentUser ? (
          <div>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to='/login'>Login/Register</Link>
          )}
        <hr />
        {currentUser && (
          <div>
            <Link to='/posts'>Portfolio</Link>
            <Link to='/collaborators'>Collaborators</Link>
            <Link to='/about'>Learn More</Link>
          </div>
        )}
      {children}
      <aside className="side">
          <Sidebar/>
      </aside>
      <footer className="footer">
        {/* <Footer/> */}
      </footer>
    </div>
  );
}
