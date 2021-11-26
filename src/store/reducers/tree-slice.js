import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

/** state *************/
const initialState = {
  alltree: [],
  selTree: '',
};

/** async action ******/
export const getAllTree = createAsyncThunk('tree/asyncTree', async () => {
  const url = 'http://127.0.0.1:3100/api/tree';
  const { data } = await axios.get(url);
  const tree = data[0].children.map((v) => {
    let children = v.children.map((v2) => ({ id: v2.id, title: v2.text }));
    return { id: v.id, title: v.text, children };
  });
  // data 가공
  return tree;
});

/** reducer ***********/
export const treeSlice = createSlice({
  name: 'tree',
  initialState,
  reducers: {
    setTree: (state, { payload }) => {
      state.selTree = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTree.fulfilled, (state, { payload }) => {
        state.allTree = payload;
      })
      .addCase(getAllTree.rejected, (state, { payload }) => {
        console.log(payload);
      });
  },
});

/** method ************/
export const { setTree } = treeSlice.actions;
export default 슬라이스네임.reducer;

// import { 동기액션, 비동기액션, 사용자함수 } from '슬라이스';
