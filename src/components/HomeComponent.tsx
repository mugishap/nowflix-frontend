import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { baseUrl } from '../constants/movie'
import Category from './Category'

const HomeComponent = () => {
    const { moviesSlice } = useSelector((state: any) => state)

    const categories = [
        {
            name: 'Popular',
            movies: moviesSlice.popular.results,
        },
        {
            name: 'Upcoming',
            movies: moviesSlice.upcoming.results,
        },
        {
            name: 'Latest',
            movies: moviesSlice.latest.results,
        },

        {
            name: 'Top Rated',
            movies: moviesSlice.topRated.results,
        },
        {
            name: 'Now Playing',
            movies: moviesSlice.nowPlaying.results,
        },
    ]

    return (
        <div className='w-full px-6 flex items-center pt-10 flex-col'>
            {/* {
                categories.map((category, index) => (
                    <Category key={index} category={category} />
                ))
            } */}
        </div>
    )
}

export default HomeComponent