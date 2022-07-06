import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const userSlice = createSlice({
    name: "users",
    initialState: {
        list: []
    },
    reducers: {
        setUserList: (state, action) => {
            state.list = action.payload;
        }
    }
});

export const { setUserList } = userSlice.actions;

export default userSlice.reducer;

//https://reqres.in/api/users?per_page=12
export const fetchAllUsers = () => (dispach) => {
    axios.get("https://rickandmortyapi.com/api/character")
    .then((res) => {
        //results
        //dispach(setUserList(res.data.data));
        dispach(setUserList(res.data.results));
    })
    .catch((err) => console.log(err));
};


