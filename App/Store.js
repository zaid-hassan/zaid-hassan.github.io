import { configureStore } from '@reduxjs/toolkit'
import isMobileReducer from '../features/isMobile/isMobileSlice'
import tabReducer from '../features/tabSlice/tabSlice'
import cursorReducer from '../features/cursorType/cursorType'
import projectReducer from '../features/isCurrentProject/isCurrentProject'

export const store = configureStore({
  reducer: {
    isMobile: isMobileReducer,
    tabSlice: tabReducer,
    cursorType: cursorReducer,
    isCurrentProject: projectReducer,
  },
})