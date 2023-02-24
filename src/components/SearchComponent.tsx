import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { baseUrl } from '../constants/movie'
import { searchMovies } from '../hooks'
import {  Slide } from "react-awesome-reveal";
import { Movie } from '../types'

interface Props {
    showSearch:boolean
    setShowSearch: Function
}

const SearchComponent: React.FC<Props> = ({ showSearch,setShowSearch }) => {

    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>("")
    const [query, setQuery] = useState<string>("")


    const dispatch = useDispatch()

    const { moviesSlice } = useSelector((state: any) => state)

    const results = moviesSlice.searchResults

    useEffect(() => {
        setLoading(true)
        searchMovies(query, dispatch, setError, setLoading)
    }, [query])

    return (
        <div className={`absolute ${
            showSearch ? "-translate-x-0" : "-translate-x-[100%]"
          } w-screen  justify-center h-screen bg-black/40 flex backdrop-blur-sm items-center z-[2]`}>
            <div className='absolute z-[3] w-full h-full' onClick={() => setShowSearch(false)}></div>
            <div className='w-9/12 px-6 md:w-7/12 h-[90%] rounded flex flex-col py-6 items-center justify-between bg-gray-900 z-[4]'>
                <input value={query} type="text" onChange={(e) => setQuery(e.target.value)} className='rounded p-3 bg-white/30 outline-none text-white w-full placeholder:text-white/60' placeholder='Search here...' />
                <div className='mt-4 w-full h-[82%] overflow-y-scroll flex items-center justify-start'>
                    {
                        loading
                            ?
                            <span>Loading</span>
                            :
                            <div className='flex flex-col w-full'>
                                {
                                    results.map((movie: Movie, index: number) => (
                                        <Link to={`/movie/${movie.id}`} key={index} className='flex w-full px-4 py-2 items-start justify-start my-2 hover:bg-white/30'>
                                            <img src={baseUrl + movie.backdrop_path} className="mr-4 object-cover w-24 h-24 rounded" alt="" />
                                            <div className='flex flex-col'>
                                                <span className='flex my-1 text-sm '>
                                                    <span className='font-bold'>
                                                        Title:
                                                    </span>
                                                    <span>
                                                        {movie.title}
                                                    </span>
                                                </span>
                                                <span className='flex my-1 text-sm '>
                                                    <span className='font-bold'>
                                                        Votes:
                                                    </span>
                                                    <span>
                                                        {movie.votes}
                                                    </span>
                                                </span>
                                                <span className='flex my-1 text-sm '>
                                                    <span className='font-bold'>
                                                        Date:
                                                    </span>
                                                    <span>
                                                        {movie.release_date}
                                                    </span>
                                                </span>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchComponent