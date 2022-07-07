import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        score: (state) => {
            state.value += 5
        },
        decrement: (state) => {
            state.value -= 2
        },
    },
})

export const { score, decrement } = counterSlice.actions

export default counterSlice.reducer