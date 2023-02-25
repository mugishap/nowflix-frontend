import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import CommonComponent from '../../components/Common/CommonComponent'
import { baseUrl } from '../../constants/movie'
import { BiPlay } from 'react-icons/bi';
import Select from '../../components/CustomSelect';
import { Movie } from '../../types';
import { getMovies } from '../../hooks';
import { Fade, Slide } from 'react-awesome-reveal';

const Movies = () => {
    const dispatch = useDispatch()
    const { moviesSlice } = useSelector((state: any) => state)
    const latest = moviesSlice.popular.results

    const [type, setType] = useState<
        'upcoming' |
        'topRated' |
        'popular' |
        'nowPlaying'
    >('popular')
    const [movies, setMovies] = useState<Movie[]>(moviesSlice.popular.results)
    const [page, setPage] = useState(1)
    const [error, setError] = useState("")
    const [totalPages, setTotalPages] = useState<number>(500);
    const [loading, setLoading] = useState<boolean>(false);

    const options = [
        { value: 'popular', name: 'Popular' },
        { value: 'upcoming', name: 'Upcoming' },
        { value: 'topRated', name: 'Top Rated' },
        { value: 'nowPlaying', name: 'Now Playing' },
    ]
    useEffect(() => {
        const data = moviesSlice[type].results
        setMovies(data)
    }, [type])

    useEffect(() => {
        setLoading(true)
        getMovies(dispatch, setError, setLoading, page)
        const data = moviesSlice[type].results
        setMovies(data)
    }, [page])

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
            <div className='w-full flex-col items-center'>
                {
                    loading
                        ?
                        <div className='w-full h-[40vh] bg-black flex justify-center items-center'>
                            <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-nf-red'></div>
                        </div>
                        :
                        <Slide direction='up' triggerOnce>
                            <section>
                                <div className='w-full h-[60vh]'>
                                    <div className='w-full h-full'>
                                        <Swiper
                                            spaceBetween={10}
                                            slidesPerView={1}
                                            scrollbar={{ draggable: true }}
                                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                                            className="h-full"
                                            autoplay={{ delay: 3000 }}
                                        >
                                            {
                                                latest.map((movie: Movie, index: number) => (
                                                    <SwiperSlide key={index} className="h-full">
                                                        <div style={{ backgroundImage: `url('${baseUrl + movie.backdrop_path}')`, backgroundAttachment: 'fixed', backgroundRepeat: "no-repeat", backgroundSize: 'cover' }} className='justify-start items-end flex w-full h-full rounded-lg'>
                                                            <div className='bg-gradient-to-t from-black/90 via-black/70 pl-8 pt-16 to-transparent w-full flex h-full items-start justify-end flex-col '>
                                                                <Fade cascade
                                                                    duration={100}
                                                                    triggerOnce className='text-white mb-10 text-5xl font-extrabold'>{movie.original_title}</Fade>
                                                                <Link to={`/movie/${movie.id}`} className='w-fit px-4 mb-12 h-14 flex items-center justify-center rounded bg-white mr-4 text-center font-bold text-2xl text-black hover:bg-white/80'>
                                                                    <BiPlay size={40} className="" />
                                                                    <span>
                                                                        Watch now
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                ))
                                            }
                                        </Swiper>
                                    </div>
                                </div>
                                <div className='w-full flex items-center justify-between px-20'>
                                    <span className='rounded text-white text-2xl font-bold my-2 py-3 px-6' >
                                        Watch the latest trending movies !!!
                                    </span>
                                    <div>
                                        <Select options={options} selectedValue={type} setSelectedValue={setType} />
                                    </div>
                                </div>
                                <div className='w-full grid-cols-1 grid px-4 sm:grid-cols-2 md:grid-cols-3 mlg:grid-cols-4 lg:grid-cols-5'>
                                    {
                                        movies.map((movie: Movie, index: number) => (
                                            <Link to={`/movie/${movie.id}`} key={index} className='w-11/12 h-72 rounded-lg flex flex-col items-center justify-center'>
                                                <img loading='lazy' className='object-cover w-full h-3/4' src={baseUrl + movie.poster_path} alt="" />
                                                <span className='text-white font-bold text-xl mt-2'>{movie.title}</span>
                                            </Link>
                                        ))
                                    }
                                    <div className='w-full flex items-center justiyf-center'>
                                        <div className='rounded'></div>
                                    </div>
                                </div>
                            </section>
                        </Slide>
                }

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
            </div>
        </CommonComponent>
    )
}

export default Movies

