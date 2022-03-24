import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Book from '../../components/book/Book';
import { getBookById } from '../../services/books';
import { Link } from 'react-router-dom';
function BookDetail() {
  const params = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBookById(params.id).then(({ data }) => setBook(data));
  }, [params.id]);

  if (!book) return <h3>Loading book...</h3>;

  return (
    <div>
      <Link to="/">Return2Home</Link>

      <Book book={book} showDetail />
    </div>
  );
}

export default BookDetail;
