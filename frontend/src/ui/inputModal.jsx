import React from 'react'

function InputModal({ type = 'text', name, formik, placeholder }) {
    return (
        <input
            {...formik.getFieldProps(name)}
            className='inputModal'
            placeholder={placeholder}
            type={type}
            name={name}
        />
    )
}

export default InputModal
