/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const sortReducer = createSlice({
  name: 'sort',
  initialState: {
    value: 'cheap',
  },
  reducers: {
    change: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { change } = sortReducer.actions

export default sortReducer.reducer
