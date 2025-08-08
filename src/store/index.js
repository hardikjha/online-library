import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';
import initialBooks from '../data/dummyBooks';

const persistedBooks = JSON.parse(localStorage.getItem('books')) || initialBooks;

const store = configureStore({
  reducer: {
    books: booksReducer
  },
  preloadedState: {
    books: persistedBooks
  }
});

store.subscribe(() => {
  localStorage.setItem('books', JSON.stringify(store.getState().books));
});

export default store;
