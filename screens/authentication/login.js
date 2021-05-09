/* eslint-disable no-unused-vars */
import _ from 'lodash'
import React, {useState} from 'react'
import { Formik } from 'formik'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { CText } from '../../components'
import { connect } from 'react-redux'
import styles from './login-style'
import UserModel from '../../app/models/UserModel'
import { saveUser } from '../../redux/actions/UserActions'
import SignupSchema from './login-validation'

const Login = ({onSaveUser, title, onClick}) => {
 
  const [loading, setLoading] = useState(false)
  const [errorText, setErrorText] = useState('')
  const authenticateUser = async ({identifier, password}) => {
    setErrorText('')
    setLoading(true)
    const user = new UserModel(_.lowerFirst(identifier), password)

    try {
      const result = await user.login()
      if (!_.isEmpty(result.jwt)) {
        onClick()
        onSaveUser(
          result.jwt,
          result.user
        )
      }
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
      initialValues={{ identifier: '', password: '' }}
      validationSchema={SignupSchema}
      onSubmit={values => authenticateUser(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <View style={styles.base}>
            <View style={styles.header}>
              <CText 
                fontF='bold'
                style={styles.title}
              >
                {title}
              </CText>
            </View>
            <View style={styles.boxImputs}>
              <View style={styles.boxImput}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('identifier')}
                  onBlur={handleBlur('identifier')}
                  value={values.identifier}
                  placeholder='Email Address'
                />
                { errors.identifier && touched.identifier 
                  ? <Text style={styles.errors}>{errors.identifier}</Text> 
                  : null
                }
              </View>
              <View style={styles.boxImput}>
                <TextInput
                  secureTextEntry={true}
                  autoCapitalize='none'
                  style={styles.input}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder='Password'
                />
                { errors.password && touched.password 
                  ? <Text style={styles.errors}>{errors.password}</Text> 
                  : null
                }
              </View>
              
          
              <TouchableOpacity
                style={styles.boxForgot}
                onPress={handleSubmit}>
                <Text style={styles.textForgot}>Forgot password?</Text> 
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.containerButton}
              onPress={handleSubmit}>
              <Text style={styles.textButton}>Login</Text>
            </TouchableOpacity>
            { !_.isEmpty(errorText) && <Text style={[styles.errors, styles.errorLogin]}t>{errorText}</Text>}
          </View>
          <View style={styles.signUpBox}>
            <Text style={styles.signUpText}>Don’t have an account? Sign up</Text>
          </View>

        </View>
      )}
    </Formik>
   
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  onSaveUser: (jwt, user) => dispatch(saveUser(jwt, user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login) 