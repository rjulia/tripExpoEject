import * as Yup from 'yup'
 
const SignupSchema = Yup.object().shape({
  country: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  end: Yup.string().required('End day is required'),
  start: Yup.string().required('Start day is required'),
})

export default SignupSchema