import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function Browse() {
  const { category } = useParams();
  const books = useSelector(state => state.books);
  const [query, setQuery] = useState('');

  const filtered = books.filter(book => {
    const matchesCategory = category ? book.category === category : true;
    const matchesQuery = book.title.toLowerCase().includes(query.toLowerCase()) ||
                         book.author.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div style={{ padding: '20px' }}>
      <h1>{category ? `${category} Books` : 'All Books'}</h1>
      <input
        type="text"
        placeholder="Search by title or author"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <ul>
        {filtered.map(book => (
          <li key={book.id}>
            {book.title} by {book.author} - <Link to={`/book/${book.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
