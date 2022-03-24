import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Book from '../../components/book/Book';
import { getBookById } from '../../services/books';

function BookDetail() {
  const params = useParams();
  console.log(params);
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBookById(params.id).then(({ data }) => setBook(data));
  }, [params.id]);

  if (!book) return <h3>Loading book...</h3>;

  return <Book book={book} showDetail />;
}

export default BookDetail;
