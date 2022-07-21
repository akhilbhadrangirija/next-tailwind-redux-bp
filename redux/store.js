import { configureStore } from '@reduxjs/toolkit'
import operatorReducer from './operatorRedux'

export const store = configureStore({
  reducer: {
    operator: operatorReducer
  }
})
