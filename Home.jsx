import { booksData } from '../data/books';
import BookCard from '../components/BookCard';

function Home() {
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi'];
  const popularBooks = booksData.slice(0, 2);

  return (
    <div>
      <h1>Welcome to the Online Library!</h1>
      <h2>Categories</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <h2>Popular Books</h2>
      {popularBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default Home;