import api from "../api";
import { setMovie, setSimilarMovies } from "../redux/slices/movieSlice";
import { setAllMovies, setSearchResults } from "../redux/slices/moviesSlice";

export const getMovies = async (dispatch: any, setError: Function, setLoading: Function) => {
    try {
        const popular = await (await api.get(`/movie/popular?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&language=en-US&page=1`)).data
        const topRated = await (await api.get(`/movie/popular?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&language=en-US&page=1`)).data
        const upcoming = await (await api.get(`/movie/popular?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&language=en-US&page=1`)).data
        const nowPlaying = await (await api.get(`/movie/popular?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&language=en-US&page=1`)).data
        const latest = await (await api.get(`/movie/latest?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&language=en-US&page=1`)).data
        dispatch(setAllMovies({ popular, topRated, latest, upcoming, nowPlaying }));
        setLoading(false)

    }
    catch (error: any) {
        setError("Failed to fetch movies")
    }
}

export const getMovie = async (id: string | undefined, dispatch: any, setError: Function, setLoading: Function) => {
    try {
        const response = await (await api.get(`/movie/${id}?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&language=en-US`))
        const similarmovies = await (await api.get(`/movie/${id}/similar?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&language=en-US&page=1`)).data
        const movie = response.data
        dispatch(setMovie(movie));
        dispatch(setSimilarMovies(similarmovies.results));
        setLoading(false)
    } catch (error) {
        setError("Failed to fetch movie")
    }
}

export const searchMovies = async (query: string, dispatch: any, setError: Function, setLoading: Function) => {
    try {
        const response = await api.get(`/search/movie?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
        const data = response.data
        dispatch(setSearchResults(data.results));
        setLoading(false)
    } catch (error) {
        setError("Failed to search movies")
    }
}

