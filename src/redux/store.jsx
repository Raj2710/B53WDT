import { configureStore } from '@reduxjs/toolkit'
import BlogReducer from './BlogSlice'
export default configureStore({
  reducer: {
    blogs:BlogReducer
  },
})