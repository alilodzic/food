import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getcars = createAsyncThunk('cars/getcars', async (_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {
        const res = await fetch('http://localhost:3005/vehicles');
        const data = await res.json();

        return data;
    } catch (err) {
        return rejectWithValue(err.massage);
    }
})


const cars = createSlice({
    name: 'cars',
    initialState: { cars: [], issLodings: false },
    extraReducers: {

        // getcars
        [getcars.pending]: (state, action) => {
            state.issLodings = true;
           
        },
        [getcars.fulfilled]: (state, action) => {
            state.issLodings = false;
              state.cars = action.payload;

        
        },
        [getcars.rejected]: (state, action) => {
        state.issLodings = false;
        },
       
    }, 
});

export default cars.reducer