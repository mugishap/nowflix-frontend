import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { baseUrl } from '../constants/movie'
import Category from './Category'

const HomeComponent = () => {
    const { moviesSlice } = useSelector((state: any) => state)
console.log(moviesSlice);

    const categories = [
        {
            name: 'Romance',
            movies: moviesSlice.romance.results,
        },
        {
            name: 'Horror',
            movies: moviesSlice.horror.results,
        },
        {
            name: 'Netflix Originals',
            movies: moviesSlice.netflixOriginals.results,
        },

        {
            name: 'Action',
            movies: moviesSlice.action.results,
        },
        {
            name: 'Comedy',
            movies: moviesSlice.comedy.results,
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