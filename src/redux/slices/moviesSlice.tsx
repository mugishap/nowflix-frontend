import { createSlice, Slice, TaskAbortError } from '@reduxjs/toolkit'
import { Movie } from '../../types'

const initialState: {
    upcoming: Array<Movie>,
    topRated: Array<Movie>,
    popular: Array<Movie>,
    nowPlaying: Array<Movie>,
    trending: Array<Movie>,
    netflixOriginals: Array<Movie>,
    latest?: Movie | null,
    topRate: Array<Movie>,
    action: Array<Movie>,
    comedy: Array<Movie>,
    horror: Array<Movie>,
    romance: Array<Movie>,
    documentaries: Array<Movie>,
    searchResults: Array<Movie>,
} = {
    upcoming: [],
    topRated: [],
    popular: [],
    nowPlaying: [],
    latest: null,
    trending: [],
    netflixOriginals: [],
    topRate: [],
    action: [],
    horror: [],
    comedy: [],
    romance: [],
    documentaries: [],
    searchResults: []
}

const moviesSlice: Slice = createSlice({
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

            state.romance = payload.romance
            state.action = payload.action
            state.horror = payload.horror
            state.comedy = payload.comedy
            state.netflixOriginals = payload.netflixOriginals
            state.documentaries = payload.documentaries
        },
        clearMovies: (state) => {
            state.upcoming = []
            state.topRated = []
            state.popular = []
            state.nowPlaying = []
            state.latest = null
            state.searchResults = []
        }
    }
})


export const { setUpcoming, setTopRated, setPopular, setNowPlaying, setAllMovies, setLatest, setSearchResults } = moviesSlice.actions

export default moviesSlice.reducer
