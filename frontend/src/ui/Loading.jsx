import React from 'react'
import { RotatingLines } from 'react-loader-spinner'
function Loading({ color = '#4a6eff', width = '100', height = '100', strok = 5 }) {
    return (
        <RotatingLines
            visible={true}
            height={height}
            width={width}
            color={color}
            strokeWidth={strok}
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{
                // color: '#fff'
            }}
            wrapperClass="text-secondary-800"
        />
    )
}

export default Loading
