import { configureStore } from '@reduxjs/toolkit'
import isMobileReducer from '../features/isMobile/isMobileSlice'

export const store = configureStore({
  reducer: {
    isMobile: isMobileReducer,
  },
})