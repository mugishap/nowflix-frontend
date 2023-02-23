import api from "../api";
import { setMovie } from "../redux/slices/movieSlice";
import { setMovies } from "../redux/slices/moviesSlice";

export const getMovies = async (dispatch: any, setError: Function) => {
    try {
        const reponse = await api.get(`/movie/popular?api_key=${import.meta.env.REACT_TMDB_API_KEY}&language=en-US&page=1`)
        const data = reponse.data
        console.log(data);
        dispatch(setMovies(data.results));
    }
    catch (error: any) {
        console.log(error);
        setError("Failed to fetch movies")
    }
}

export const getMovie = async (id: string | undefined, dispatch: any, setError: Function) => {
    try {
        const response =  await api.get(`/movie/movie_id?api_key=${import.meta.env.REACT_TMDB_API_KEY}&language=en-US`)
        const data = response.data
        console.log(data);
        dispatch(setMovie(data));

    } catch (error) {
        setError("Failed to fetch movie")
    }
}

export const searchMovies = async (query: string, dispatch: any, setError: Function) => {
    try {
        const response = await api.get(`/search/movie?api_key=${import.meta.env.REACT_TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
        const data = response.data
        console.log(data);
        dispatch(setMovies(data.results));
    } catch (error) {
        setError("Failed to search movies")
    }
}