import { useFormik } from 'formik'
import React from 'react'
import InputModal from '../../ui/inputModal';
const initialValues = {
    fullName: '',
    userName: '',
    email: '',
    bio: '',
    currentPassword: '',
    newPassword: '',
    link: ''
}
function ProfileUpdateForm() {
    
    const onSubmit = (values) => {
        console.log(values);
    }
    const formik = useFormik({
        initialValues,
        onSubmit
    });
    return (
        <form onSubmit={formik.handleSubmit} className='grid grid-cols-[1fr_1fr] grid-rows-5 gap-x-2 gap-y-2 mt-3'>
            <InputModal name='fullName' placeholder='Full Name' formik={formik} />
            <InputModal name='userName' placeholder='Username' formik={formik} />
            <InputModal name='email' placeholder='Email' formik={formik} />
            <textarea type="text" className='inputModal' placeholder='Bio' name='bio' {...formik.getFieldProps('bio')} />
            <InputModal type="password" name='currentPassword' placeholder='Current Password' formik={formik} />
            <InputModal type="password" name='newPassword' placeholder='New Password' formik={formik} />
            <input type="text" className='inputModal col-span-2' placeholder='Link' name='link' {...formik.getFieldProps('link')} />
            <button className='btn-primary w-full col-span-2 mt-2'>Update</button>
        </form>
    )
}

export default ProfileUpdateForm
