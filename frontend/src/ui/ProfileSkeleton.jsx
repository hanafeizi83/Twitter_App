import React from 'react'

function ProfileSkeleton() {
    return (
        <div className="flex flex-col gap-4 px-4 py-2  border-x border-secondary-300 w-full">
            <div className="flex flex-col gap-2">
                <div className="skeleton bg-black h-4 w-14"></div>
                <div className="skeleton bg-black h-4 w-20"></div>
            </div>
            <div className='flex flex-col gap-4 relative items-end'>
                <div className="skeleton bg-black h-40 w-full"></div>
                <div className="skeleton bg-black h-24 w-24 border border-secondary-500 shrink-0 rounded-full absolute left-6 top-24"></div>
                <div className="skeleton bg-black h-6 w-24 "></div>
            </div>
            <div className="flex flex-col gap-3 mt-4">
                <div className="skeleton bg-black h-4 w-20"></div>
                <div className="skeleton bg-black h-4 w-36"></div>
                <div className="skeleton bg-black h-4 w-64"></div>
            </div>
        </div>
    )
}

export default ProfileSkeleton
