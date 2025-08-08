import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import BookCard from '../components/BookCard';

export default function Browse() {
  const { category } = useParams();
  const books = useSelector(state => state.books);
  const [query, setQuery] = useState('');

  const filtered = books.filter(book => {
    const matchesCategory = category ? book.category === category : true;
    const matchesQuery =
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="container">
      <h1>{category ? `${category} Books` : 'All Books'}</h1>
      <input
        type="text"
        placeholder="Search by title or author"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <div className="book-grid">
        {filtered.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}




