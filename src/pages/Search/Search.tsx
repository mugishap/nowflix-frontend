import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import CommonComponent from '../../components/Common/CommonComponent'
import { baseUrl } from '../../constants/movie'
import { getMovies, getSearchedMovies } from '../../hooks'
import { Movie } from '../../types'

const Search = () => {

    const dispatch = useDispatch()
    const { query } = useParams()
    const { moviesSlice } = useSelector((state: any) => state)
    const movies = moviesSlice.searchResults
    const [results, setResults] = useState<Movie[]>(movies)
    const [page, setPage] = useState(1)
    const [error, setError] = useState("")
    const [totalPages, setTotalPages] = useState<number>(500);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true)
        getSearchedMovies(query as string, dispatch, setError, setLoading, page)
    }, [page])

    useEffect(() => {
        setResults(movies)
    }, [movies])

    useEffect(() => {
        toast.error(error)
    }, [error])

    const getPageNumbers = () => {
        const pageNumbers = [];
        if (totalPages > 10) {
            if (page < 6) {
                for (let i = 1; i <= 8; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            } else if (page >= 6 && page <= totalPages - 5) {
                pageNumbers.push(1);
                pageNumbers.push('...');
                for (let i = page - 2; i <= page + 2; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            } else {
                pageNumbers.push(1);
                pageNumbers.push('...');
                for (let i = totalPages - 7; i <= totalPages; i++) {
                    pageNumbers.push(i);
                }
            }
        } else {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        }

        return pageNumbers;
    }


    return (
        <CommonComponent>
            {
                loading ?
                    <span>Loading</span>
                    :
                    <div className='w-full mt-24 px-8'>
                        <span className='flex'>
                            <span className='text-2xl font-bold '>Search Results: &nbsp;</span> <span className='text-xl'>{query}</span>
                        </span>
                        <div className='w-full grid-cols-1 grid  sm:grid-cols-2 md:grid-cols-3 mlg:grid-cols-4 lg:grid-cols-5'>
                            {
                                results.slice(0, 10).map((movie: Movie, index: number) => (
                                    <Link to={`/movie/${movie.id}`} key={index} className='hover:scale-105 duration-200 w-11/12 h-72 rounded-lg flex flex-col items-center justify-center'>
                                        <img loading='lazy' className='object-cover w-full h-3/4' src={baseUrl + movie.poster_path} alt="" />
                                        <span className='text-white font-bold text-xl mt-2 w-11/12 truncate'>{movie.title}</span>
                                    </Link>
                                ))
                            }
                            <div className='w-full flex items-center justiyf-center'>
                                <div className='rounded'></div>
                            </div>
                        </div>
                        <div className="flex justify-center my-12">
                            <div className="flex justify-center items-center space-x-2 mt-4">
                                {page > 1 && (
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => setPage(page - 1)}
                                    >
                                        Previous
                                    </button>
                                )}
                                {getPageNumbers().map((pageNumber, index) => (
                                    <span
                                        key={index}
                                        className={
                                            pageNumber === page
                                                ? 'bg-blue-500 text-white font-bold py-2 px-4 rounded'
                                                : 'hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded'
                                        }
                                        onClick={() => setPage(pageNumber as number)}
                                    >
                                        {pageNumber}
                                    </span>
                                ))}
                                {page < totalPages && (
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => setPage(page + 1)}
                                    >
                                        Next
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>}
        </CommonComponent>
    )
}

export default Search