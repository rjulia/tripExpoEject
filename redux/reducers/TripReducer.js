const defaultState = {
  trip: null,
  trips: []
}

const TripReducer = (state = defaultState, action) => {

  switch (action.type) {
  case 'TRIP_SAVE': {
    return {
      ...state,
      trip: action.payload
    }
  }

  case 'TRIP_DELETE': {
    return {
      trip: null
    }
  }

  case 'GET_TRIPS' : {
    return {
      ...state,
      trips: action.payload
    }
  }

  default:
    return state
  }
}

export default TripReducer