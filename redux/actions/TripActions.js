
import {TRIP_SAVE, TRIP_DELETE, GET_TRIPS} from './types'
export function saveTrip(trip) {
  return{
    type: TRIP_SAVE,
    payload: {
      trip,
    },
  }
}

export function getTrips(trips) {
  return{
    type: GET_TRIPS,
    payload: {
      trips,
    },
  }
}

export function deleteTrip () {
  return{
    type: TRIP_DELETE
  }
}