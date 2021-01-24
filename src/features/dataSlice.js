import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// interface Adress {
//   streetAddress:string,
//   city:string,
//   state:string,
//   zip:string,
//
// }
// interface DataState {
//   id:number,
//   firstName:string,
//   lastName:string,
//   email:string,
//   phone:string,
//   adress:Adress,
//   description:string
// }

export const getData = createAsyncThunk('data/getData', async ()=>{
  return fetch('http://www.filltext.com/?rows=100&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&adress=%7BaddressObject%7D&description=%7Blorem%7C32%7D')
    .then((res)=>res.json())
})

export const initialState = {
    isFetching:true,
    error:'',
    data: [],
  }

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  extraReducers: {
    [getData.pending]: (state) => {
      state.isFetching = true
    },
    [getData.rejected]:(state,action)=>{

      state.error=action.payload;
    },
    [getData.fulfilled]:(state,action) => {
      state.isFetching = false;
      state.data = action.payload;
    }
  },
});


export const selectData = state => state.data.data;
export const selectLoading = state => state.data.isFetching;

export default dataSlice.reducer;
