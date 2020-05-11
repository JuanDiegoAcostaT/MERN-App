import React from 'react';
import { Router } from '@reach/router';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import CreateUser from './components/CreateUser';
import CreateNote from './components/CreateNote';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <>
      <Navigation />
      <div className='container p-4'>
        <Router>
          <NotFound default />
          <NotesList exact path='/' />
          <CreateNote exact path='/edit/:id' />
          <CreateNote exact path='/create' />
          <CreateUser exact path='/user' />
        </Router>
      </div>
    </>
  );
};

export default App;
