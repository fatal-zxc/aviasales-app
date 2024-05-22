import { configureStore } from '@reduxjs/toolkit'

import sortReducer from './sort'
import transfersReducer from './transfers'

const store = configureStore({
  reducer: {
    sort: sortReducer,
    transfers: transfersReducer,
  },
})

export default store
