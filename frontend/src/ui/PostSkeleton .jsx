import React from 'react'

function PostSkeleton() {
    return (
        <>
            <div className="flex w-full flex-col gap-4 px-4 py-2">
                <div className="flex items-center gap-4">
                    <div className="skeleton h-12 w-12 shrink-0 rounded-full"></div>
                    <div className="flex flex-col gap-4">
                        <div className="skeleton h-2 w-20"></div>
                        <div className="skeleton h-2 w-28"></div>
                    </div>
                </div>
                <div className="skeleton h-32 w-full"></div>
            </div>
        </>
    )
}

export default PostSkeleton 
