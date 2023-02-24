import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { BiPlay, BiInfoCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { baseUrl } from '../constants/movie'

const TopComponent = () => {
    const randomNumber = Math.floor(Math.random() * 20)

    const { moviesSlice } = useSelector((state: any) => state)
    const movies = moviesSlice.popular.results
    const [movie, setMovie] = useState<any>({})
    useEffect(() => {
        setMovie(movies[randomNumber])
        
    }, [movies])
    return (
        <div style={{ backgroundImage: `url('${baseUrl + movie.backdrop_path}')`,backgroundSize:'cover' }} className='from-black w-full flex items-start h-[70vh] justify-start'>
            <div className='w-full h-full bg-gradient-to-t from-black via-black/40 flex items-center justify-end pb-24  flex-col'>
                <div className='w-full flex items-center justify-start md:px-10 lg:px-24'>
                    <div className='w-full md:w-8/12 px-2 lg:w-8/12 flex flex-col'>
                        <span className='text-5xl mb-10 font-extrabold text-white'>{movie.original_title}</span>
                        <span className=' text-white text-2xl'>
                            {movie.overview}
                        </span>
                        <div className='my-8 flex items-start justify-start'>
                            <Link to={`/movie/${movie.id}`} className='w-44 h-14 flex items-center justify-center rounded bg-white mr-4 text-center font-bold text-2xl text-black hover:bg-white/80'>
                                <BiPlay size={40} className="" />
                                <span>
                                    Play
                                </span>
                            </Link>
                            <button className='w-44 h-14 flex items-center justify-center rounded bg-white/80 ml-4 text-center font-bold text-2xl text-black hover:bg-white'>
                                <BiInfoCircle size={34} className="mr-2" />
                                <span>
                                    More Info
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopComponent