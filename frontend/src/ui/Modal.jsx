import React, { useRef } from 'react'
import useOutsideClick from '../hook/useOutsideClick';

function Modal({ open, children, onClose ,title}) {
    const { ref } = useOutsideClick(onClose)
    return (
        open && <div className='backdrop-blur-md w-full z-10 h-screen flex items-center justify-center absolute top-0 left-0'>
            <div ref={ref} className='bg-secondary-100 border border-secondary-400 rounded md:w-[60%] w-[80%] lg:w-[40%] p-5'>
                <h1 className='text-secondary-800 text-center font-bold text-xl'>{title}</h1>
                {children}
            </div>
        </div>

    )
}

export default Modal
