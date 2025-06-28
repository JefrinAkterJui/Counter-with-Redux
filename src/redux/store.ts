import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./features/counter/counterSlice"
import logger from "./middleware/loger";



export const store = configureStore({
    reducer:{
        counter: counterReducer
    },
    middleware: (getFefualtMiddleware)=>getFefualtMiddleware().concat(logger)
})

export type RootSatate =  ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch