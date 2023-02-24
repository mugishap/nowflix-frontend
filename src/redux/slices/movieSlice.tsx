import { createSlice, TaskAbortError } from '@reduxjs/toolkit'
import { Movie } from '../../types'

const initialState: {
    movie: Movie,
    similarMovies: Movie[]
} = {
    movie: {},
    similarMovies: []
}

const moviesSlice = createSlice({
    name: "movie    ",
    initialState,
    reducers: {
        setMovie: (state, { payload }) => {
            state.movie = payload
        },
        clearMovie: (state) => {
            state.movie = {}
        },
        setSimilarMovies: (state, { payload }) => {
            state.similarMovies = payload
        },

    }
})

export const { setMovie, setSimilarMovies, clearMovie } = moviesSlice.actions

export default moviesSlice.reducer
