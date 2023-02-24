import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import CommonComponent from '../../components/Common/CommonComponent'
import MovieComponent from '../../components/MovieComponent'
import { getMovie } from '../../hooks'

const Movie = () => {
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  const { movieId } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    getMovie(movieId, dispatch, setError, setLoading)
  }, [movieId])
  useEffect(() => {
    if (error) {
      toast.error("Failed to fetch movie")
    }
  }, [error])

  return (
    <CommonComponent>
      <div className='w-full h-full flex flex-col'>
        {
          loading ?
            <div className='w-full bg-black h-screen flex justify-center items-center'>
              <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-nf-red'></div>
            </div>
            :
            <MovieComponent />
        }
      </div>
    </CommonComponent>
  )
}

export default Movie