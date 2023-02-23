import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CommonComponent from '../../components/Common/CommonComponent'
import { baseUrl } from '../../constants/movie'
import { getMovie } from '../../hooks'

const Movie = () => {
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)
  
  const { movieId } = useParams()
  const dispatch = useDispatch()

  const movie = useSelector((state:any)=>state.movie)
  useEffect(() => {
    getMovie(movieId,dispatch,setError)
  }, [movieId])

  return (
    <CommonComponent>
      <div className='w-full flex flex-col items-center'>
        <div className='w-full' style={{ background: `url('${baseUrl + movie.backdrop_path}')` }}></div>
        <div className='w-full  bg-gradient-to-to from-black/80 via-black/30 to-transparent'></div>

      </div>
    </CommonComponent>
  )
}

export default Movie