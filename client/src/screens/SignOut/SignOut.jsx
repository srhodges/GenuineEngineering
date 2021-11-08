import { useEffect } from 'react'
import { removeToken } from '../../services/auth'
import { useHistory } from 'react-router-dom'

const SignOut = (props) => {
  const { setCurrentUser } = props
  const history = useHistory()

  useEffect(() => {
    const signOutUser = async () => {
      await removeToken()
      setCurrentUser(null)
      localStorage.removeItem("authToken")
      history.push('/')
    }
    signOutUser()
  }, [history, setCurrentUser])

  return ''
}

export default SignOut