import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { baseUrl } from '../constants/movie'

const HomeComponent = () => {




    return (
        <div className='w-full px-6 flex items-center pt-10 flex-col'>
            <span className='text-3xl text-white w-full  font-bold'>Popular</span>
            
        </div>
    )
}

export default HomeComponent