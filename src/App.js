import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Browse from './pages/Browse';
import BookDetails from './pages/BookDetails';
import AddBook from './pages/AddBook';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Browse />} />
        <Route path="/books/:category" element={<Browse />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
