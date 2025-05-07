import React from 'react'
import XSvg from './../../../ui/X'
import { MdOutlineMail, MdOutlinePassword } from 'react-icons/md'
import InputForm from '../../../ui/InputForm'
import { LuUser } from 'react-icons/lu'
import { BiSolidEditAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import Loading from '../../../ui/Loading'
import useSignUp from './useSignUp'

const initialValues = {
    email: '',
    username: '',
    fullName: '',
    password: ''
};
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('email is required'),
    username: Yup.string().required('userName is required'),
    fullName: Yup.string().required('full Name is required'),
    password: Yup.string().required('password is required').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, { message: "Please create a stronger password" })
})
function SignupPage() {
    const { signUp, isLoading } = useSignUp();
    const onSubmit = (values) => {
        signUp(values, {
            onSuccess: () => {
                formik.resetForm();
            }
        })
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    return (
        <div className='container max-w-screen-lg max-lg flex h-screen'>
            <div className='flex-1 hidden lg:flex items-center  justify-center'>
                <XSvg className='lg:w-2/3 fill-white' />
            </div>
            <div className='flex-1 flex flex-col justify-center items-center'>
                <form
                    onSubmit={formik.handleSubmit}
                    className='flex gap-1 flex-col w-[65%] md:w-[40%] lg:w-[65%]'>
                    <XSvg className='w-24 lg:hidden fill-white' />
                    <h1 className='text-secondary-900 text-center font-extrabold text-4xl mb-2'>Join today.</h1>
                    <InputForm name='email' placeholder='Email' type='email' formik={formik}>
                        <MdOutlineMail className='text-secondary-700 absolute pl-1 text-xl' />
                    </InputForm>
                    <InputForm name='username' placeholder='Username' formik={formik}>
                        <LuUser className='text-secondary-700 absolute pl-1 text-xl' />
                    </InputForm>
                    <InputForm name='fullName' placeholder='Full Name' formik={formik}>
                        <BiSolidEditAlt className='text-secondary-700 absolute pl-1 text-xl' />
                    </InputForm>
                    <InputForm name='password' placeholder='Password' type='password' formik={formik}>
                        <MdOutlinePassword className='text-secondary-700 absolute pl-1 text-xl' />
                    </InputForm>
                    <button type='submit' className='btn-primary flex items-center justify-center'>
                        {
                            isLoading ?
                                <Loading
                                    color='white'
                                    width='30'
                                    height='30'
                                    strok='3'
                                /> :
                                'Sign up'
                        }

                    </button>
                </form>
                <div className='flex flex-col w-[60%] md:w-[40%] lg:w-[60%] gap-2 mt-4'>
                    <p className='text-white text-lg text-center'>Already have an account?</p>
                    <Link to='/login'>
                        <button className='btn-primary bg-transparent border border-primary-800 text-white w-full'>Sign in</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignupPage
