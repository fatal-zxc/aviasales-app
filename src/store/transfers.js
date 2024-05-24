import { createSlice } from '@reduxjs/toolkit'

const transfersReducer = createSlice({
  name: 'transfers',
  initialState: {
    zero: true,
    one: true,
    two: true,
    three: true,
  },
  reducers: {
    toggle: (state, action) => {
      state[action.payload] = !state[action.payload]
    },
    all: (state) => {
      state.zero = true
      state.one = true
      state.two = true
      state.three = true
    },
    noone: (state) => {
      state.zero = false
      state.one = false
      state.two = false
      state.three = false
    },
  },
})

export const { toggle, all, noone } = transfersReducer.actions

export default transfersReducer.reducer
