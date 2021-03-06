import React from 'react';
import { Router } from '@reach/router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/collapse';

import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import Home from './components/Home';
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
          <Home exact path='/' />
          <NotesList exact path='/notes' />
          <CreateNote exact path='/edit/:id' />
          <CreateNote exact path='/create' />
          <CreateUser exact path='/user' />
        </Router>
      </div>
    </>
  );
};

export default App;
