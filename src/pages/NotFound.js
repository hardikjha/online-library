import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}
