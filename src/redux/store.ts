import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import moviesReducer from './slices/moviesSlice'
import movieReducer from './slices/moviesSlice'
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: "root",
    storage
}
const rootReducer = combineReducers({
    moviesSlice: moviesReducer,
    movieSlice: movieReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)
