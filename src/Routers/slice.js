import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    
    name: 'dataSlice',

    initialState : [{name: "John", age: "26",cource: "MERN", batch: "October"},
    {name: "Doe", age: "25",cource: "MERN", batch: "November"},
    {name: "Biden", age: "26",cource: "MERN", batch: "September"},
    {name: "Barar", age: "22",cource: "MERN", batch: "September"},
    {name: "Christ", age: "23",cource: "MERN", batch: "October"},
    {name: "Elent", age: "24",cource: "MERN", batch: "November"}],

    reducers: {
        editData : (state, action)=>{
            state[action.payload.locat] = action.payload.currData;
            console.log(state);
            return(state)
        },
        addData:(state, action)=>{
            state[state.length] = action.payload;
            console.log(state);
            // console.log(action.payload);
            return(state)
        }
    }

})

export const {editData, addData} = dataSlice.actions;
export default dataSlice.reducer;