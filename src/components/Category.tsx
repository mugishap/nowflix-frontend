import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { baseUrl } from '../constants/movie';
import { Link } from 'react-router-dom';
import { Movie } from '../types';
import { Fade } from 'react-awesome-reveal';


interface Props {
    category: {
        name: string,
        movies: Movie[]
    }
}

const Category: React.FC<Props> = ({ category }) => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
        <div className='w-full flex flex-col'>
            <Fade cascade
                duration={20}
                triggerOnce className='text-xl font-bold'
            >{category.name}</Fade>
            <div className='w-full flex items-center justify-center'>
                <Swiper
                    spaceBetween={3}
                    slidesPerView={Math.floor(screenWidth / 320)}
                    navigation={true}
                    scrollbar={{ draggable: true }}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}

                >
                    {
                        category.movies.map((movie: Movie, index: number) => (
                            <SwiperSlide key={index}>
                                <Link to={`/movie/${movie.id}`} key={index} className='w-[22rem] h-96 rounded-lg flex flex-col items-center justify-center'>
                                    <img className='rounded object-cover w-full h-64' src={baseUrl + movie?.backdrop_path} alt="" />
                                    <span className='text-white font-bold text-xl mt-2'>{movie.title}</span>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Category