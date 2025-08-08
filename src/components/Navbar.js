import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#222', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', marginRight: '10px' }}>Home</Link>
      <Link to="/books" style={{ color: '#fff', marginRight: '10px' }}>Browse Books</Link>
      <Link to="/add-book" style={{ color: '#fff' }}>Add Book</Link>
    </nav>
  );
}
