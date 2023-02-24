import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { lazy, Suspense, useEffect, useState } from 'react'
import { getMovies } from './hooks'
import { useDispatch } from "react-redux";
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/autoplay';

import { Autoplay } from 'swiper';
import SwiperCore from 'swiper'
const Movies = lazy(() => import('./pages/Movies/Movies'))
const Home = lazy(() => import('./pages/Home/Home'))
const Movie = lazy(() => import('./pages/Movie/Movie'))
const Search = lazy(() => import('./pages/Search/Search'))
const NotFound = lazy(() => import('./pages/404/NotFound'))


function App() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    getMovies(dispatch, setError, setLoading)
  }, [])

  useEffect(() => {
    if (error)
      toast.error(error)
  }, [error])
  SwiperCore.use([Autoplay]);

  return (
    <Suspense
      fallback={
        <div className='w-screen bg-black h-screen flex justify-center items-center'>
          <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-nf-red'></div>
        </div>
      }
    >

      <div className='text-white font-lato'>

        <ToastContainer position='bottom-center' theme='colored' hideProgressBar={true} />
        {
          loading ?
            <div className='w-screen bg-black h-screen flex justify-center items-center'>
              <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-nf-red'></div>
            </div>
            :
            <BrowserRouter>
              <Routes>
                <Route element={<Home />} path="/"></Route>
                <Route element={<Movie />} path="/movie/:movieId"></Route>
                <Route element={<Movies />} path="/movies"></Route>
                <Route element={<Search />} path="/search/:query"></Route>
                <Route element={<NotFound />} path="*"></Route>
              </Routes>
            </BrowserRouter>
        }
      </div>
    </Suspense>
  )
}

export default App
