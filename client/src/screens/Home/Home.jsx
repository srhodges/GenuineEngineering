import './Home.css'
import Register from '../Register/Register'


const Home = (props) => {
  const {handleRegister} = props

  
  return (
    
    <div className="children-container">
        <Register handleRegister={handleRegister} />  
    </div>
  
  )
}

export default Home