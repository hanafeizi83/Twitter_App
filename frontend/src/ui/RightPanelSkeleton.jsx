import React from 'react'

function RightPanelSkeleton() {
    return (
        <div className="flex w-full flex-col gap-4 mb-4">
            <div className="flex items-center gap-4">
                <div className="skeleton h-12 w-12 shrink-0 rounded-full"></div>
                <div className="flex flex-col gap-4">
                    <div className="skeleton h-2 w-12"></div>
                    <div className="skeleton h-2 w-16"></div>
                </div>
                <div className="skeleton h-4 w-16"></div>
            </div>
        </div>
    )
}

export default RightPanelSkeleton
