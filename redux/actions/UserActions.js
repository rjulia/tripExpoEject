import {USER_DELETE, USER_SAVE} from './types'

export function saveUser(jwt, user) {
  return{
    type: USER_SAVE,
    payload: {
      jwt,
      user,
    },
  }
}

export function deleteUser() {
  return{
    type: USER_DELETE
  }
}