import { createSlice, TaskAbortError } from '@reduxjs/toolkit'

const initialState: {
    upcoming: Array<any>,
    topRated: Array<any>,
    popular: Array<any>,
    nowPlaying: Array<any>,
    latest: Array<any>,
    searchResults: Array<any>,
} = {
    upcoming: [],
    topRated: [],
    popular: [],
    nowPlaying: [],
    latest: [],
    searchResults: []
}

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setUpcoming: (state, { payload }) => {
            state.upcoming = payload
        },
        setTopRated: (state, { payload }) => {
            state.topRated = payload
        },
        setPopular: (state, { payload }) => {
            state.popular = payload
        },
        setNowPlaying: (state, { payload }) => {
            state.nowPlaying = payload
        },
        setLatest: (state, { payload }) => {
            state.latest = payload
        },
        setSearchResults: (state, { payload }) => {
            state.searchResults = payload
        },
        setAllMovies: (state, { payload }) => {
            state.upcoming = payload.upcoming
            state.topRated = payload.topRated
            state.popular = payload.popular
            state.nowPlaying = payload.nowPlaying
            state.latest = payload.latest
        },
        clearMovies: (state) => {
            state.upcoming = []
            state.topRated = []
            state.popular = []
            state.nowPlaying = []
            state.latest = []
            state.searchResults = []
        }
    }
})


export const { setUpcoming, setTopRated, setPopular, setNowPlaying, setAllMovies, setLatest, setSearchResults } = moviesSlice.actions

export default moviesSlice.reducer
