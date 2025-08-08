import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';

export default function Home() {
  const books = useSelector(state => state.books);
  const categories = [...new Set(books.map(book => book.category))];
  const popular = [...books]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <div className="container">
      <h1>Welcome to NovelVault</h1>

      {/* Categories Section */}
      <h2>Categories</h2>
      <ul>
        {categories.map(cat => (
          <li key={cat}>
            <Link to={`/books/${cat}`}>{cat}</Link>
          </li>
        ))}
      </ul>

      {/* Popular Books Section */}
      <h2 style={{ marginTop: '20px' }}>Popular Books</h2>
      <div className="book-grid">
        {popular.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
