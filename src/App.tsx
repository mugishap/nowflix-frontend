import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Movie from './pages/Movie/Movie'
import { useEffect, useState } from 'react'
import { getMovies } from './hooks'
import { useDispatch } from "react-redux";
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'
import Movies from './pages/Movies/Movies'
import 'swiper/css';


function App() {
  const dispatch = useDispatch();
  const [error, setError] = useState<string>("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMovies(dispatch, setError,setLoading)
  }, [])

  useEffect(() => {
    if (error)
      toast.error(error)
  }, [error])

  return (
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
            </Routes>
          </BrowserRouter>
      }
    </div>
  )
}

export default App
