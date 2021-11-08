import './Layout.css'
import Sidebar from './Sidebar';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout(props) {
  const { children } = props;

  return (
    <div className="grid-container">
      <header className="header">
        <h1>Genuine Engineering</h1>
      </header>
      <Nav />
      <aside className="sidebar">
          <Sidebar/>
      </aside>
      <div className="children-container">
          {children}
      </div>
      <Footer />
    </div>
  );
}
