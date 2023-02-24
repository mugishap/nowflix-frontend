import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { baseUrl } from '../constants/movie'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


interface Props {
}

const MovieComponent: React.FC<Props> = ({ }) => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const { movieSlice } = useSelector((state: any) => state)
    const movie = movieSlice.movie
    const similarMovies = movieSlice.similarMovies

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className='w-full flex flex-col items-center'>
            <div className='w-full h-[80vh] bg-no-repeat bg-cover' style={{ background: `url('${baseUrl + movie.backdrop_path}')` }}>
                <div className='w-full h-full bg-gradient-to-r items-end justify-start pb-12 pl-12 flex from-black/90 via-black/70 to-transparent'>
                    <div className='flex flex-col w-1/2 items-start'>
                        <span className='text-white mb-6 text-6xl font-extrabold'>{movie.original_title}</span>
                        <span className='text-white text-xl'>{movie.overview}</span>
                        <div className='flex my-8 items-center justify-center'>
                            {
                                movie.genres.map((genre: any, index: number) => (
                                    <Link to={`genre/${genre.id}`} key={index} className='hover:bg-gray-600 bg-gray-800 px-4 py-1 mx-2 rounded-2xl cursor-pointer text-white'>{genre.name} </Link>
                                ))
                            }
                        </div>
                        <div className='flex items-center justify-start my-2'>
                            <span className='text-white font-bold'>Release Date: &nbsp;</span>
                            <span className='text-white'>{movie.release_date}</span>
                        </div>
                        <div className='flex items-center justify-start my-2'>
                            <span className='text-white font-bold'>Vote Average: &nbsp;</span>
                            <span className='text-white'>{movie.vote_average}</span>
                        </div>
                        <div className='flex items-center justify-start my-2'>
                            <span className='text-white font-bold'>Production Countries: &nbsp;</span>
                            <div className='flexitems-center justify-center'>
                                {
                                    movie.production_countries.map((genre: any, index: number) => (
                                        <Link to={`genre/${genre.id}`} key={index} className='hover:bg-gray-600 bg-gray-800 px-4 py-1 mx-2 rounded-2xl cursor-pointer text-white'>{genre.name} </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col items-start justify-start px-6'>
                <span className='text-3xl text-white my-4 font-bold'>Similar Movies</span>
                <div className='w-full flex items-center justify-center'>
                    <Swiper
                        spaceBetween={3}
                        slidesPerView={Math.floor(screenWidth / 380)}
                        navigation={true}
                        scrollbar={{ draggable: true }}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}

                    >
                        {
                            similarMovies.map((movie: any, index: number) => (
                                <SwiperSlide key={index}>
                                    <Link to={`/movie/${movie.id}`} key={index} className='w-[22rem] h-96 rounded-lg flex flex-col items-center justify-center'>
                                        <img className='object-cover w-full h-64' src={baseUrl + movie?.backdrop_path} alt="" />
                                        <span className='text-white font-bold text-xl mt-2'>{movie.title}</span>
                                    </Link>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default MovieComponent