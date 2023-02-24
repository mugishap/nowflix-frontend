import { createSlice, TaskAbortError } from '@reduxjs/toolkit'
import { Movie } from '../../types'

const initialState: {
    upcoming: Array<Movie>,
    topRated: Array<Movie>,
    popular: Array<Movie>,
    nowPlaying: Array<Movie>,
    trending: Array<Movie>,
    netflixOriginals: Array<Movie>,
    latest: Movie | null,
    action: Array<Movie>,
    horror: Array<Movie>,
    comedy: Array<Movie>,
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
    action: [],
    horror: [],
    comedy: [],
    romance: [],
    documentaries: [],
    searchResults: []
}

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMovies: (state, { payload }) => {
            state.upcoming = payload.upcoming
            state.topRated = payload.topRated
            state.popular = payload.popular
            state.nowPlaying = payload.nowPlaying
            state.latest = payload.latest

            state.romance = payload.romance
            state.horror = payload.horror
            state.action = payload.action
            state.documentaries = payload.documentaries
            state.comedy = payload.comedy
            state.trending = payload.trending
            state.netflixOriginals = payload.netflixOriginals

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
