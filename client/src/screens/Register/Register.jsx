import './Register.css'
import { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const history = useHistory()
  const { username, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  
  return (
    <div className='form-container'>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
        history.push('/portfolio')
      }}
    >
      {/* <h3>Register</h3> */}
      <label>
        Username:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input type='text' name='email' value={email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
      </form>
      <p>
      Already Have An Account? Sign In <Link to="./login">Here</Link>
      </p>
      </div>
  );
}
