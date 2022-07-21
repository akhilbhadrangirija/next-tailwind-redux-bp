import { createSlice } from '@reduxjs/toolkit'

const operatorSlice = createSlice({
  name: 'user',
  initialState: {
    // currentUser: null,
    currentUser: {
      name: 'John',
      packages: [
        { id: 1, packageName: 'Himachal' },
        { id: 2, packageName: 'Kerala' },
        { id: 3, packageName: 'Kasol' }
      ]
    },
    isFetching: false,
    error: false
  },
  reducers: {
    loginStart: state => {
      state.isFetching = true
    },
    loginSuccess: (state, action) => {
      state.isFetching = false
      state.currentUser = action.payload
    },
    loginFailure: state => {
      state.isFetching = false
      state.error = true
    },
    logOut: state => {
      state.currentUser = null
    }
  }
})
export const { loginStart, loginSuccess, loginFailure, logOut } =
  operatorSlice.actions
export default operatorSlice.reducer
