import { useFormik } from 'formik'
import React from 'react'
import InputModal from '../../ui/inputModal';
import useEditProfile from './useEditProfile';
import useUserProfile from './useUserProfile';

function ProfileUpdateForm({ onClose, authUser: user }) {


    const { editProfile, isEditing } = useEditProfile();
    const initialValues = {
        fullName: user.fullName,
        username: user.username,
        email: user.email,
        bio: user.bio,
        currentPassword: '',
        newPassword: '',
        link: user.link
    }
    const onSubmit = (values) => {
        editProfile(values, {
            onSuccess: () => {
                formik.resetForm();
                onClose();
            }
        })
    }
    const formik = useFormik({
        initialValues,
        onSubmit
    });
    return (
        <form onSubmit={formik.handleSubmit} className='grid grid-cols-[1fr_1fr] grid-rows-5 gap-x-2 gap-y-2 mt-3'>
            <InputModal name='fullName' placeholder='Full Name' formik={formik} />
            <InputModal name='username' placeholder='Username' formik={formik} />
            <InputModal name='email' placeholder='Email' formik={formik} />
            <textarea type="text" className='inputModal' placeholder='Bio' name='bio' {...formik.getFieldProps('bio')} />
            <InputModal type="password" name='currentPassword' placeholder='Current Password' formik={formik} />
            <InputModal type="password" name='newPassword' placeholder='New Password' formik={formik} />
            <input type="text" className='inputModal col-span-2' placeholder='Link' name='link' {...formik.getFieldProps('link')} />
            <button className='btn-primary w-full col-span-2 mt-2'> {isEditing ? 'Updating ...' : 'Update'}</button>
        </form>
    )
}

export default ProfileUpdateForm
