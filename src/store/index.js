import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';
import initialBooks from '../data/dummyBooks';

// Current data version — bump to refresh stored books
const DATA_VERSION = 'v3';

// Get persisted data and version
const storedData = JSON.parse(localStorage.getItem('booksData') || '{}');

let preloadedBooks;
if (storedData.version === DATA_VERSION && Array.isArray(storedData.books)) {
  // Use stored books if version matches
  preloadedBooks = storedData.books;
} else {
  // Use initialBooks and save with new version
  preloadedBooks = initialBooks;
  localStorage.setItem(
    'booksData',
    JSON.stringify({ version: DATA_VERSION, books: initialBooks })
  );
}

const store = configureStore({
  reducer: {
    books: booksReducer
  },
  preloadedState: {
    books: preloadedBooks
  }
});

// Persist books & version when state changes
store.subscribe(() => {
  localStorage.setItem(
    'booksData',
    JSON.stringify({
      version: DATA_VERSION,
      books: store.getState().books
    })
  );
});

export default store;
