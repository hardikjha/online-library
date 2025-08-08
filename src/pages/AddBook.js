import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../store/booksSlice';
import { useNavigate } from 'react-router-dom';

export default function AddBook() {
  const [form, setForm] = useState({
    title: '', author: '', category: '', description: '', rating: ''
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = () => {
    let errs = {};
    if (!form.title) errs.title = 'Title required';
    if (!form.author) errs.author = 'Author required';
    if (!form.category) errs.category = 'Category required';
    if (!form.rating || form.rating < 1 || form.rating > 5) errs.rating = 'Rating must be 1-5';
    return errs;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    dispatch(addBook({ ...form, rating: Number(form.rating) }));
    navigate('/books');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
        {errors.title && <p style={{color: 'red'}}>{errors.title}</p>}
        
        <input placeholder="Author" value={form.author} onChange={e => setForm({...form, author: e.target.value})} />
        {errors.author && <p style={{color: 'red'}}>{errors.author}</p>}
        
        <input placeholder="Category" value={form.category} onChange={e => setForm({...form, category: e.target.value})} />
        {errors.category && <p style={{color: 'red'}}>{errors.category}</p>}
        
        <textarea placeholder="Description" value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
        
        <input type="number" placeholder="Rating" value={form.rating} onChange={e => setForm({...form, rating: e.target.value})} />
        {errors.rating && <p style={{color: 'red'}}>{errors.rating}</p>}
        
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
