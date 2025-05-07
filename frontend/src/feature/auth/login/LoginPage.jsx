import React from 'react'
import InputForm from '../../../ui/InputForm'
import { LuUser } from 'react-icons/lu'
import { useFormik } from 'formik'
import { MdOutlinePassword } from 'react-icons/md'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import Loading from '../../../ui/Loading'
import XSvg from '../../../ui/X'

const initialValues = {
  username: '',
  password: ''
}

const validationSchema = Yup.object({
  username: Yup.string().required('user name is required'),
  password: Yup.string().required('password is required')
})

function LoginPage() {
  const isLoading = false;
  const onSubmit = (values) => {
    console.log(values);

  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })
  return (
    <div className='container max-w-screen-xl mx-auto flex h-screen items-center justify-center'>
      <div className=' hidden lg:flex items-center  justify-center '>
        <XSvg className='lg:w-2/3 fill-white' />
      </div>
      <div className=' flex flex-col justify-center items-center'>
        <form
          onSubmit={formik.handleSubmit}
          className='flex gap-1 flex-col'>
          <XSvg className='w-24 lg:hidden fill-white' />
          <h1 className='text-secondary-900 text-center font-extrabold text-4xl mb-6'>Let's go.</h1>
          <InputForm name='username' placeholder='Username' formik={formik}>
            <LuUser className='text-secondary-700 absolute pl-1 text-xl' />
          </InputForm>
          <InputForm name='password' placeholder='Password' type='password' formik={formik}>
            <MdOutlinePassword className='text-secondary-700 absolute pl-1 text-xl' />
          </InputForm>
          <button type='submit' className='btn-primary flex items-center justify-center'>
            {isLoading ?
              <Loading
                color='white'
                width='30'
                height='30'
                strok='3'
              /> :
              'Login'}
          </button>
        </form>
        <div className='flex flex-col gap-2 mt-4 '>
          <p className='text-white text-lg'>{"Don't"} have an account?</p>
          <Link to='/signup'>
            <button className='btn-primary  bg-transparent border border-primary-800 text-white w-full'>Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
