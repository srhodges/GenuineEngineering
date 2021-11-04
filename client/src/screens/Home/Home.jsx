// import './Home.css'
// import { registerUser } from '../../services/auth';
// import Register from '../Register/Register'
// import { useState } from 'react';
// import { useHistory } from 'react-router-dom';


// const Home = (props) => {
//   const history = useHistory()
//   const [currentUser, setCurrentUser] = useState(null);
//   const {setUser} = props
//   props.setIsUser(false)

//   const handleRegister = async (formData) => {
//     const userData = await registerUser(formData);
//     setCurrentUser(userData);
//     history.push('/');
//   };

  
//   return (
    
//     <div className="home-container">
//         <Register handleRegister={handleRegister} />  
//       {/* <Footer/> */}
//     </div>
  
//   )
// }

// export default Home