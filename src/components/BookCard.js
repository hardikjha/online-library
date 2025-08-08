import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/200x300?text=No+Cover";
  };

  return (
    <div className="book-card">
      <img
        src={book.image}
        alt={book.title}
        className="book-image"
        onError={handleImageError}
      />
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
