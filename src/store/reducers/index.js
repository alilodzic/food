import { configureStore } from "@reduxjs/toolkit";
import cars from "./carsdata";
import reviews from "./reviewdata";


export default configureStore({
    reducer: {
     cars,reviews
    }
})

