import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { baseUrl } from '../constants/movie'
import Category from './Category'

const HomeComponent = () => {
    const { moviesSlice } = useSelector((state: any) => state)

    const categories = [
        {
            name: 'Romance',
            movies: moviesSlice.romance.results,
            delay:3000
        },
        {
            name: 'Horror',
            movies: moviesSlice.horror.results,
            delay:4000
        },
        {
            name: 'Netflix Originals',
            movies: moviesSlice.netflixOriginals.results,
            delay:3000
        },

        {
            name: 'Action',
            movies: moviesSlice.action.results,
            delay:4000
        },
        {
            name: 'Comedy',
            movies: moviesSlice.comedy.results,
            delay:3000
        },
    ]

    return (
        <div className='w-full px-6 flex items-center pt-10 flex-col'>
            {
                categories.map((category, index) => (
                    <Category key={index} category={category} />
                ))
            }
        </div>
    )
}

export default HomeComponent