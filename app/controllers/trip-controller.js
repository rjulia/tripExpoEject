import axios from 'axios'
const env = process.env

/**
 * @param {TripModel} trip
 */
export const saveTrip = async trip => {


  const headers = {
    'Content-Type': 'application/json',
  }
  const tripObj = {
    user: trip.user,
    title: `${trip.city}, ${trip.country}`,
    country: trip.country ,
    city: trip.city,
    end: trip.end,
    start: trip.start,
    budget: trip.budget
  }

  try {
    const { data } = await axios.post(`${env.REACT_NATIVE_URL}/trips`, tripObj, {
      headers: headers
    })
    if (!data.trip) {
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
