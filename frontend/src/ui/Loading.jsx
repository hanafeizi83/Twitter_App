import React from 'react'
function Loading({ size = 'xl' }) {
    return (
        <span className={`loading loading-spinner text-secondary-800 loading-${size}`}></span>
    )
}

export default Loading
