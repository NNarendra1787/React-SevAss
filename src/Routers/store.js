import { configureStore } from "@reduxjs/toolkit";
import dataKing from './slice'

const store = configureStore({
    reducer:{
        dataKey : dataKing
    }
})

export default store