import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './views/Home';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import BookDetail from './views/Books/BookDetail';
function App() {
  // TODO: Add routes to books & views
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/books">
          <BookList />
        </Route>
        <Route exact path="/books/:id">
          <BookDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
//a link to my books BookList
// placement
// where do I create a link?
