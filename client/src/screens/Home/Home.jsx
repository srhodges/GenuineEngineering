import './Home.css'
import Footer from '../../components/Footer/Footer'
import Register from '../Register/Register'
import Login from '../Login/Login'


const Home = (props) => {

  const {setUser} = props
  props.setIsUser(false)
  
  return (
    
    <div className="home-container">
        <Login handleLogin={handleLogin} />
        <Register handleRegister={handleRegister} />  
      <Footer/>
    </div>
  
  )
}

export default Home