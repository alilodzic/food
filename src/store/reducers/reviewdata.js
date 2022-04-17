import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getreviews = createAsyncThunk('reviews/getreviews', async (_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {
        const res = await fetch('http://localhost:3005/reviews');
        const data = await res.json();

        return data;
    } catch (err) {
        return rejectWithValue(err.massage);
    }
})


const reviews = createSlice({
    name: 'reviews',
    initialState: { reviews: [], issLodings: false },
    extraReducers: {

        // getreviews
        [getreviews.pending]: (state, action) => {
            state.issLodings = true;
           
        },
        [getreviews.fulfilled]: (state, action) => {
            state.issLodings = false;
              state.reviews = action.payload;

        
        },
        [getreviews.rejected]: (state, action) => {
        state.issLodings = false;
        },
       
    }, 
});

export default reviews.reducer