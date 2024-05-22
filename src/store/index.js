import { configureStore } from '@reduxjs/toolkit'

import sortReducer from './sort'
import transfersReducer from './transfers'
import aviasalesReducer from './aviasales'

const store = configureStore({
  reducer: {
    sort: sortReducer,
    transfers: transfersReducer,
    aviasales: aviasalesReducer,
  },
})

export default store
