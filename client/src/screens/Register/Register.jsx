import { useState } from 'react';
import { registerUser } from '../../services/auth';
import { useHistory } from 'react-router';
// import { Link } from 'react-router-dom';

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



  const onRegister = async (event) => {
    event.preventDefault()
    const { setCurrentUser } = props
    try {
      const currentUser = await registerUser(formData)
      setCurrentUser(currentUser)
      history.push('/portfolio')
    } catch (error) {
      console.error(error)
      setFormData({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        isError: true,
        errorMsg: 'Invalid Login',
      })
    }
  }


  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}
    >
      <h3>Register</h3>
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
  );
}
