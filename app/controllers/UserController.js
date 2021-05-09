import { deleteUser} from '../../redux/actions/UserActions'
import axios from 'axios'
const env = process.env

/**
 * @param {UserModel} user
 */
export const login = async user => {


  const headers = {
    'Content-Type': 'application/json',
  }
  const userObj = {
    identifier: user.identifier,
    password: user.password,
  }

  try {
    const { data } = await axios.post(`${env.REACT_NATIVE_URL}/auth/local`, userObj, {
      headers: headers
    })
    if (!data.jwt) {
      return 'please sign again'
    }

 
    return data
  } catch (error) {
    if (error.response) {
      // console.log(error.response)
      return error.response
    }
    return error
  }
}

/**
 * @param {UserModel} user
 */
export const logout = () => {
  deleteUser()
}