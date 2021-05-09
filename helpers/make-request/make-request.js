import _ from 'lodash'
import axios from 'axios'
const env = process.env


function makeRequest({
  headers,
  method,
  endPoint,
  //body,
  params,
  data,
  urlString, 
}= {}) {
  const url = !_.isEmpty(urlString) ? urlString : `${env.REACT_NATIVE_URL}/${endPoint}`
  
  return axios({
    method,
    url,
    data,
    params,
    headers,
  })
    .catch(error => {
      console.error('error', error)
      throw error
    })
    .then(response => {
      return response.data
    })
} 

export default makeRequest