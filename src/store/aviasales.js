/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchSearchId = createAsyncThunk('data/fetchSearchId', async () => {
  const res = await fetch('https://aviasales-test-api.kata.academy/search')
  if (!res.ok) {
    throw new Error('error create id')
  }
  const json = await res.json()
  return json.searchId
})

export const fetchTickets = createAsyncThunk('data/fetchTickets', async (id) => {
  const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
  if (!res.ok) {
    throw new Error('error get tickets')
  }
  const json = await res.json()
  return json
})

const aviasalesReducer = createSlice({
  name: 'aviasales',
  initialState: {
    searchId: '',
    tickets: [],
    stop: false,
    error: false,
    firstLoaded: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.fulfilled, (state, action) => {
        state.searchId = action.payload
        state.tickets = []
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.tickets.push(...action.payload.tickets)
        state.stop = action.payload.stop
        state.firstLoaded = true
        state.error = false
      })
      .addCase(fetchTickets.rejected, (state) => {
        state.error = true
      })
  },
})

export default aviasalesReducer.reducer
