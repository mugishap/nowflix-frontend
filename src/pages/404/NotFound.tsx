import React, { useEffect } from 'react'
import CommonComponent from '../../components/Common/CommonComponent'

const NotFound = () => {
    useEffect(() => {
        document.title = "404 | Page not found"
    }, [])
    return (
        <CommonComponent>
            <div className='w-full my-auto h-[50vh] flex items-center justify-center'>
                <span className='flex text-white text-3xl font-bold'> 404 | Page not found</span>
            </div>
        </CommonComponent>
    )
}

export default NotFound