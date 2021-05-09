import * as Yup from 'yup'
 
const SignupSchema = Yup.object().shape({
  identifier: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
})

export default SignupSchema