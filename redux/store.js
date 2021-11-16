import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import productSlice from './productSlice'

export default configureStore({
    reducer: {
       counter: counterSlice,
       products: productSlice
    }
})