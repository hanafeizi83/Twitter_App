import React from 'react'

function InputForm({ children, name, placeholder, type = 'text', formik }) {
    return (
        <div className={`${formik.errors[name] && formik.touched[name] ?'mb-2':'mb-4'} w-full flex items-center justify-center flex-col`}>
            <label className='formLabel'>
                {children}
                <input
                    type={type}
                    className='formInput'
                    placeholder={placeholder}
                    name={name}
                    {...formik.getFieldProps(name)}
                />
            </label>
            {formik.errors[name] && formik.touched[name] && <p className='text-red-600 text-left'>{formik.errors[name]}</p>}
        </div>
    )
}

export default InputForm
