import React, { useState, useCallback, useEffect } from 'react'
import { TRIP_SAVE, GET_TRIPS} from '../../redux/actions/types'
import HomeTripView from './home-trip-view'
import { useStore, useDispatch } from 'react-redux'
import { makeRequest, getImagesTrip } from '../../helpers'
import dataHome from './components/data'
import _ from 'lodash'
const env = process.env

const HomeTripController = (props) => {
  const [trips, setTrips] = useState([])
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const store = useStore()
  const dispatch = useDispatch()

  const getImages = useCallback(async () => {

    setLoading(true)

    makeRequest({
      urlString: `http://res.cloudinary.com/${env.REACT_NATIVE_CLOUDINARY_CLOUD_NAME}/image/list/trips.json`
    })
      .then(response => {
        setImages(_.get(response, 'resources'))
        setLoading(false)
      })

  },[])



  const getTrips = useCallback(async (imgs) => {
    setLoading(true)
    const jwt = store.getState().user.jwt
    const headers = {
      Authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json',
    }
    makeRequest({
      method: 'get',
      endPoint: 'trips',
      headers,
    })
      .then(response => {
        dispatch({ type: GET_TRIPS, payload: response })
        const newArrayTrips = massageDateTrip(response, imgs)
        setTrips(newArrayTrips)
        setLoading(false)
      })
  },[])

  const massageDateTrip = (trips, imgs) => {
    
    let tripsNews = [..._.reverse(dataHome)]
    console.log('images', imgs)
    _.forEach(trips, (trip) => {
      const imgObj = getImagesTrip(trip.city, imgs)
      console.log('imgObj', imgObj, trip.city)
      const element =  {
        id: trip._id,
        title: `${trip.title}`,
        subtitle: null,
        date: `${trip.end}, ${trip.start}`,
        source: require('../../assets/img/tourism.jpeg'),
        imgObj: imgObj,
        buttonAction: () => onGetTrip(trip._id),
        budget: trip.budget,
        buttinText: null,
        message: null,
        initial: false
      }
      tripsNews.push(element)
    })

    tripsNews.splice(0, 0, { id: 'empty-left' })
    tripsNews.push({ id: 'empty-right' })
    return tripsNews
  }
  const onGetTrip = (id) =>{
    dispatch({ type: TRIP_SAVE, payload:  id })
    props.navigation.navigate('Itinerary')
  }

  useEffect(() => {
    getTrips(images)
  }, [images])

  useEffect(() => {
    getImages()
  }, [])

  const viewProps = {
    trips,
    loading,
    onGetTrip,
    ...props
  }

  return (
    <HomeTripView {...viewProps}/>
  )
}

export default HomeTripController

