import { createSlice, TaskAbortError } from '@reduxjs/toolkit'

const initialState: {
    movie: any
} = {
    movie: {}
}

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMovie: (state, { payload }) => {
            state.movie = payload
        },
        clearMovie: (state) => {
            state.movie = []
        }
    }
})

export const { setMovie, clearMovie } = moviesSlice.actions

export default moviesSlice.reducer
