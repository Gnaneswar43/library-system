import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/booksSlice';

function AddBook() {
  const [form, setForm] = useState({ title: '', author: '', description: '', rating: '', category: '' });
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.description || !form.rating || !form.category) {
      setError('All fields are required.');
      return;
    }
    dispatch(addBook({ ...form, id: Date.now().toString() }));
    navigate(`/books/${form.category}`);
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} /><br />
        <input name="author" placeholder="Author" onChange={handleChange} /><br />
        <input name="description" placeholder="Description" onChange={handleChange} /><br />
        <input name="rating" placeholder="Rating" onChange={handleChange} /><br />
        <input name="category" placeholder="Category" onChange={handleChange} /><br />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;