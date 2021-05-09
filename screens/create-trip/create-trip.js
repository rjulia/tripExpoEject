/* eslint-disable no-unused-vars */

import _ from 'lodash'
import React, {useState} from 'react'
import { 
  View, 
  Platform, 
  KeyboardAvoidingView, 
  Text, 
  TouchableOpacity,
  TextInput
} from 'react-native'
import { useSelector } from 'react-redux'
import { Calendar} from 'react-native-calendars'
import Icon from 'react-native-vector-icons/MaterialIcons'
import moment from 'moment'
import { Formik } from 'formik'
import { 
  Select, 
  CText,
  Button,
  ModalComponent
} from '../../components'
import TripModel from '../../app/models/trip-model'
import theme from '../../theme'
import styles from './create-trip-style'
import { getCoutries, getCities } from '../../countries'
import { getDaysBetweenDates } from '../../helpers'
import editTripSchema from './create-trip-validation'

export default function CreateTrip({
  title,
  message
}) {
  const [cities, setCities] = useState([])
  const [errorText, setErrorText] = useState('')
  const [dates, setDates] = useState(null)
  const [endingDay, setEndingDay] = useState(null)
  const [startingDay, setStartingDay] = useState(null)
  const [visible, setVisible] = useState(false)
  const onDismiss = () => {
    setVisible(!visible)
  }
  const state = useSelector(state => state)
  const countries = getCoutries()
  const createNewTrips = async({
    country ,
    city,
    end,
    start,
    budget,
  }) => {
    setErrorText('')
    const user = _.get(state, 'user.user.id')
    const title = `${city}, ${country}`
    const trip = new TripModel(
      title,
      country,
      city,
      end,
      start,
      budget,
      user)
    try {
      const result = await trip.saveTrip()
      if (result.status === 400) {
        const error = _.get(result, 'data.message[0].messages[0].message')
        setErrorText(error)
          
      }
    } catch (err) {
      console.error('catch', err)
    } 
  }

  return (
    <Formik
      initialValues={{  
        country: '' ,
        city: '',
        end: '',
        start: '',
        budget: '',
      }}
      validationSchema={editTripSchema}
      onSubmit={(values, { setSubmitting }) => {
        const isCreate = createNewTrips(values)
        isCreate.then(() => {setSubmitting(false)})
      }}
    >
      {({  
        handleSubmit,
        handleChange,
        values,
        errors,
        touched,
        setFieldTouched,
        setFieldValue,
        handleBlur
      }) => {

        const selectDays = (day) => {

          if (startingDay && endingDay) {
            setDates(null)
            setStartingDay(null)
            setEndingDay(null)
            
          } else if(startingDay) {
            setEndingDay(day.dateString)
            setFieldValue('end', day.dateString)
            const arrayDates = getDaysBetweenDates(moment(startingDay), moment(day.dateString))
      
            const obj = {}
      
            for (const key of arrayDates) {
              obj[key] = { selected: true, color: '#e4e4e4', textColor: theme.colors.text}
            }

            setDates({
              ...dates,
              ...obj,
              [day.dateString]: { selected: true, endingDay: true, color: theme.colors.primary, textColor: 'white'},
            })
          }  else {
            setStartingDay(day.dateString)
            setFieldValue('start', day.dateString)
            setDates({
              [day.dateString]: {
                startingDay: true, color: theme.colors.primary, textColor: 'white'},
            })
          }      
        }
        
        return(
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
          >
            <View style={styles.container}>
              <CText 
                fontF="bold"
                style={styles.title}>{title}</CText>
              <Text style={styles.message}>{message}</Text>
              <Select
                data={countries}
                label={'Country'}
                autoCapitalize="none"
                value={values.country || ''}
                onChange={(key, value) => {
                  setCities(getCities(value))
                  setFieldValue(key, value)
                }}
                onTouch={setFieldTouched}
                error={touched.country && errors.country}
                name="country"              
              />
              { errors.country && touched.country 
                ? <Text style={styles.errors}>{errors.country}</Text> 
                : null
              }
            
              <Select
                data={cities}
                label={'City'}
                autoCapitalize="none"
                value={values.city || ''}
                onChange={setFieldValue}
                onTouch={setFieldTouched}
                error={touched.country && errors.country}
                name="city"              
              /> 
              { errors.city && touched.city 
                ? <Text style={styles.errors}>{errors.city}</Text> 
                : null
              }
              <View style={styles.dateBox}>
                <TouchableOpacity 
                  style={[styles.containerDateButton, styles.containerDateStart]}
                  onPress={onDismiss}>
                  <View
                    style={[
                      styles.boxDateButton
                    ]}
                  >
                    <Text style={styles.textButtonDate}>{!_.isEmpty(startingDay) ? startingDay : 'Start Day' }</Text>
                    <Icon style={{color: theme.colors.grey}} size={22} name="date-range"/>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.containerDateButton, styles.containerDateEnd]}
                  onPress={onDismiss}>
                  <View
                    style={[
                      styles.boxDateButton
                    ]}
                  >
                    <Text style={styles.textButtonDate}>{ !_.isEmpty(endingDay) ? endingDay : 'End Day' }</Text>
                    <Icon style={{color: theme.colors.grey}} size={22} name="date-range"/>
                  </View>
                </TouchableOpacity>

              </View>
              { errors.start && touched.start 
                ? <Text style={styles.errors}>{errors.start}</Text> 
                : null
              }
              { errors.end && touched.end 
                ? <Text style={styles.errors}>{errors.end}</Text> 
                : null
              }
             

              <TextInput 
                style={styles.input}
                value={values.budget}
                name="budget"
                placeholder="Estimated Budget (Optional)"
                placeholderTextColor={theme.colors.grey}
                onChangeText={handleChange('budget')}
                onBlur={handleBlur('budget')}
              />

              <Button
                fontF='normal'
                containerStyle={styles.containerButton}
                textStyle={styles.textButton}
                text="Save trip"
                onPress={handleSubmit}>
              </Button>

          
            </View>
            <ModalComponent
              onDismiss={onDismiss}
              visible={visible}
            >
              <View style={styles.containerCalendar}>
                <Text style={styles.titleCalendar}>When will you be there?</Text>    
                <Calendar
                  disabledByDefault={false}
                  markedDates={dates}
                  markingType={'period'}
                  current={moment().format('YYYY-MM-DD')}
                  // minDate={moment().subtract(2, 'y')}
                  // maxDate={moment().add(2, 'y')}
                  onDayPress={(day) => selectDays(day)}
                  // onDayLongPress={(day) => {console.log('selected day', day)}}
                  monthFormat={'yyyy - MM'}
                  // onMonthChange={(month) => {console.log('month changed', month)}}
                  hideArrows={false}e
                  hideExtraDays={false}   
                  disableMonthChange={false}
                  firstDay={1}
                  hideDayNames={false}
                  showWeekNumbers={false}
                  onPressArrowLeft={subtractMonth => subtractMonth()}
                  onPressArrowRight={addMonth => addMonth()}
                  disableArrowLeft={false}
                  disableArrowRight={false}tes
                  disableAllTouchEventsForDisabledDays={false}false
                  enableSwipeMonths={true}
                  style={{
                    height: 400,
                    width: '100%',
                  }}
                  horizontal={false}
                  pagingEnabled={true}
                  theme={{
                    backgroundColor: theme.colors.white,
                    calendarBackground: '#ffffff',
                    textSectionTitleColor: '#b6c1cd',
                    textSectionTitleDisabledColor: '#d9e1e8',
                    selectedDayBackgroundColor: theme.colors.primary,
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: theme.colors.primary,
                    dayTextColor: theme.colors.grey,
                    textDisabledColor: theme.colors.lightGrey,
                    dotColor: theme.colors.primary,
                    selectedDotColor: '#ffffff',
                    arrowColor: theme.colors.primary,
                    disabledArrowColor: '#d9e1e8',
                    monthTextColor: theme.colors.primary,
                    indicatorColor: 'blue',
                    // textDayFontFamily: 'monospace',
                    // textMonthFontFamily: 'monospace',
                    // textDayHeaderFontFamily: 'monospace',
                    textDayFontWeight: '300',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: '300',
                    textDayFontSize: 14,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 16,
                    'stylesheet.calendar.header': {
                      dayTextAtIndex0: {
                        color: 'red'
                      },
                      dayTextAtIndex6: {
                        color: 'blue'
                      }
                    }
                  }}
                />
                <Button
                  fontF='normal'
                  textStyle={styles.textButton}
                  text="CONTINUE"
                  onPress={onDismiss}>
                </Button>
              </View>
            </ModalComponent>
          </KeyboardAvoidingView>
        )}}
    </Formik>
  )
}