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

function App() {
  const dispatch = useDispatch();
  const [error, setError] = useState<string>("")

  useEffect(() => {
    getMovies(dispatch, setError)
  }, [])

  useEffect(() => {
    if (error)
      toast.error(error)
  }, [error])

  return (
    <div className='font-lato bg-black/90'>
      <ToastContainer position='bottom-center' theme='colored' hideProgressBar={true} />
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<Movie />} path="/movie/:movieId"></Route>
          <Route element={<Movies />} path="/movies"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
