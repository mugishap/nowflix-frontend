import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import CommonComponent from '../../components/Common/CommonComponent'
import { baseUrl } from '../../constants/movie'
import { BiPlay } from 'react-icons/bi';
import Select from '../../components/CustomSelect';

const Movies = () => {
    const dispatch = useDispatch()
    const [type, setType] = useState<
        'upcoming' |
        'topRated' |
        'popular' |
        'nowPlaying' |
        'latest'
    >('popular')
    const { moviesSlice } = useSelector((state: any) => state)
    const [movies, setMovies] = useState(moviesSlice.popular.results)
    const latest = moviesSlice.popular.results

    const options = [
        { value: 'popular', name: 'Popular' },
        { value: 'upcoming', name: 'Upcoming' },
        { value: 'latest', name: 'Latest' },
        { value: 'topRated', name: 'Top Rated' },
        { value: 'nowPlaying', name: 'Now Playing' },
    ]

    useEffect(() => {
        setMovies(moviesSlice[type].results)
        console.log(moviesSlice.latest.results);
    }, [type])

    return (
        <CommonComponent>
            <div className='w-full flex-col items-center'>
                <div className='w-full h-[60vh]'>
                    <div className='w-full h-full'>
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1}
                            navigation={true}
                            scrollbar={{ draggable: true }}
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            className="h-full"
                            autoplay={{ delay: 1000 }}
                        >
                            {
                                latest.map((movie: any, index: number) => (
                                    <SwiperSlide key={index} className="h-full">
                                        <div style={{ background: `url('${baseUrl + movie.backdrop_path}')`, backgroundClip: 'border-box', backgroundSize: 'cover' }} className='justify-start items-end flex w-full h-full rounded-lg'>
                                            <div className='bg-gradient-to-t from-black/90 via-black/70 pl-8 pt-16 to-transparent w-full flex h-full items-start justify-end flex-col '>
                                                <span className='text-white mb-10 text-5xl font-extrabold'>{movie.original_title}</span>
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

                <div className='w-full flex items-center justify-between px-16'>
                    <span className='rounded text-white text-2xl font-bold my-2 py-3 px-6' >
                        Watch the latest trending movies !!!
                    </span>
                    <div>
                        <Select options={options} selectedValue={type} setSelectedValue={setType} />
                    </div>
                </div>

                <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {
                        movies.map((movie: any, index: number) => (
                            <Link to={`/movie/${movie.id}`} key={index} className='w-11/12 h-96 rounded-lg flex flex-col items-center justify-center'>
                                <img className='object-cover w-full h-3/4' src={baseUrl + movie.poster_path} alt="" />
                                <span className='text-white font-bold text-xl mt-2'>{movie.title}</span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </CommonComponent>
    )
}

export default Movies

