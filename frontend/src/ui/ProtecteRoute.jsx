import React, { useEffect } from 'react'
import { useAthrize } from '../feature/auth/useAuthrize'
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';

function ProtecteRoute({ children }) {
    const { userAthenticated, isLoading, authUser } = useAthrize();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoading && !userAthenticated) return navigate('/login');
    }, [authUser,isLoading , userAthenticated])
    if (isLoading) return <div className='h-screen w-full flex items-center justify-center'><Loading /></div>

    if (!isLoading && userAthenticated) return children
}

export default ProtecteRoute
