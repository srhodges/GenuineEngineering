import './Home.css'
import Register from '../Register/Register'


const Home = (props) => {
  const {handleRegister} = props

  
  return (
    
    <div className="home-container">
        <Register handleRegister={handleRegister} />  
      {/* <Footer/> */}
    </div>
  
  )
}

export default Home