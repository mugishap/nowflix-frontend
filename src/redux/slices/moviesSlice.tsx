import { createSlice, TaskAbortError } from '@reduxjs/toolkit'

const initialState: {
    movies:Array<any>
} = {
    movies:[]
}

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMovies: (state, { payload }) => {
            state.movies=payload
        },
        clearMovies: (state) => {
            state.movies = []
        }
    }
})

export const { setMovies,clearMovies } = moviesSlice.actions

export default moviesSlice.reducer
