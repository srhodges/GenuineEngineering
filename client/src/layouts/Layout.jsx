import './Layout.css'
import Sidebar from './Sidebar';
import Nav from './Nav';
// import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { children, currentUser, handleLogout } = props;

  return (
    <div className="grid-container">
      <header className="header">
        <h1>Genuine Engineering</h1>
      </header>
      <Nav />
      {/* <div className="sidebar-container"> */}
      <aside className="sidebar">
          <Sidebar/>
      </aside>
      <div className="children-container">
        <div className="children">
          {children}
        </div>
      </div>
      <footer className="footer">
        <h3>some catchy tag line</h3>
      </footer>
    </div>
  );
}
