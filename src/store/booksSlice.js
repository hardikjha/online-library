import { createSlice, nanoid } from '@reduxjs/toolkit';
import initialBooks from '../data/dummyBooks';

const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    addBook: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(book) {
        return {
          payload: { id: nanoid(), ...book }
        };
      }
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
