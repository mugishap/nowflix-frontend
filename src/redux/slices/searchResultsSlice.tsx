import { createSlice } from '@reduxjs/toolkit'

const initialState: {
    results:Array<any>
} = {
    results:[]
}

const resultsSlice = createSlice({
    name: "results",
    initialState,
    reducers: {
        setResults: (state, { payload }) => {
            state.results=payload
        },
        clearResults: (state) => {
            state.results = []
        }
    }
})

export const { setResults,clearResults } = resultsSlice.actions

export default resultsSlice.reducer
