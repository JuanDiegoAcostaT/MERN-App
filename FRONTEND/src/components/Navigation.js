/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from '@reach/router';

export default function Navigation() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          Notes App
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/notes'>
                Notes List
                <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/create'>
                Create Note
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/user'>
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
