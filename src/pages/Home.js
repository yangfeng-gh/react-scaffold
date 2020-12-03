import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/app">app</Link>
        </li>
        <li>
          <Link to="/jswiper">jswiper</Link>
        </li>
        <li>
          <Link to="/rswiper">rswiper</Link>
        </li>
      </ul>
    </nav>
  );
}
