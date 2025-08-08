import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} className="book-image" />
      <div className="book-info">
        <h3>{book.title}</h3>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Category:</strong> {book.category}</p>
        <p><strong>Rating:</strong> {book.rating} / 5</p>
        <Link to={`/book/${book.id}`} className="btn">View Details</Link>
      </div>
    </div>
  );
}
