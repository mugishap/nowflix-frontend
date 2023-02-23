import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { baseUrl } from '../../constants/movie'

const Movies = () => {
    const dispatch = useDispatch()
    const { moviesSlice } = useSelector((state: any) => state)
    const movies = moviesSlice.movies
    console.log(movies);
    return (
        <div className='w-full flex-col items-center'>
            <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    movies.map((movie: any, index: number) => (
                        <Link to={`/movie/${movie.id}`} key={index} className='w-11/12 h-96 rounded-lg flex flex-col items-center justify-center'>
                            <img className='object-cover w-full h-3/4' src={baseUrl + movie.backdrop_path} alt="" />
                            <span className='text-white font-bold text-xl mt-2'>{movie.title}</span>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Movies