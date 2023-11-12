import { reducer as userReducer } from './user-store/index'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    user: userReducer,
  }
})