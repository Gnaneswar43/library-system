import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector((state) => state.books.books.find((b) => b.id === id));

  if (!book) return <p>Book not found.</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      <p>Rating: {book.rating}</p>
      <button onClick={() => navigate(-1)}>Back to Browse</button>
    </div>
  );
}

export default BookDetails;