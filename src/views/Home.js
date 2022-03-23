import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>
        Welcome To Our Home Page
        <p>Feel free to checkout out our Library</p>
        <NavLink to="/books">Booklist</NavLink>
      </h1>
    </div>
  );
}
