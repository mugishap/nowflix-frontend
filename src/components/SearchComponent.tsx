import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { baseUrl } from '../constants/movie'
import { searchMovies } from '../hooks'

interface Props {
    setShowSearch: Function
}

const SearchComponent: React.FC<Props> = ({ setShowSearch }) => {

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
        <div className='absolute w-screen justify-center h-screen bg-black/80 flex backdrop-blur-sm items-center z-[2]'>
            <div className='absolute z-[3] w-full h-full' onClick={() => setShowSearch(false)}></div>
            <div className='w-9/12 px-6 md:w-7/12 h-4/5 rounded flex flex-col py-6 items-center justify-between bg-gray-900 z-[4]'>
                <input value={query} type="text" onChange={(e) => setQuery(e.target.value)} className='rounded p-3 bg-white/20 outline-none text-white w-full placeholder:text-white/60' placeholder='Search here...' />
                <div className='mt-6 w-full h-[90%] overflow-y-auto flex items-center justify-start'>
                    {
                        loading
                            ?
                            <span>Loading</span>
                            :
                            <div className='flex flex-col w-full'>
                                {
                                    results.map((movie: any, index: number) => (
                                        <div className='flex w-full px-4 py-2 items-center justify-center my-2 hover:bg-white/30'>
                                            <img src={baseUrl + movie.backdrop_path} className="object-cover w-24 h-24 rounded" alt="" />
                                            <div className='flex flex-col'>
                                                Name: {movie.name}
                                            </div>
                                        </div>
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