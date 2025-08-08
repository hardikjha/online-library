import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function BookDetails() {
  const { id } = useParams();
  const book = useSelector(state => state.books.find(b => b.id === id));

  if (!book) {
    return <p>Book not found</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <p>{book.description}</p>
      <p>Rating: {book.rating} / 5</p>
      <Link to="/books">Back to Browse</Link>
    </div>
  );
}
