import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Home() {
  const books = useSelector(state => state.books);
  const categories = [...new Set(books.map(book => book.category))];
  const popular = [...books].sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to the Online Library</h1>
      <h2>Categories</h2>
      <ul>
        {categories.map(cat => (
          <li key={cat}>
            <Link to={`/books/${cat}`}>{cat}</Link>
          </li>
        ))}
      </ul>

      <h2>Popular Books</h2>
      <ul>
        {popular.map(book => (
          <li key={book.id}>
            {book.title} - <Link to={`/book/${book.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
