import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from '@reach/router';

import * as timeago from 'timeago.js';

export default function NotesList() {

  const [notes, setNotes] = useState([]);
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState('');

  const fecthData = async () => {
    // const res = await axios.get('httpss://ead859eb.ngrok.io/api/notes');
    // const resUsers = await axios.get('httpss://ead859eb.ngrok.io/api/users');
    const res = await axios.get('https://taskapp-mern.herokuapp.com/api/notes');
    const resUsers = await axios.get('https://taskapp-mern.herokuapp.com/api/users');
    setNotes(res.data);
    setUsers(resUsers.data);

  };

  useEffect(() => {
    fecthData();
  }, []);

  const handleClick = async (id) => {
    // await axios.delete(`httpss://ead859eb.ngrok.io/api/notes/${id}`, {
    await axios.delete(`https://localhost:3000/api/notes/${id}`, {
      data: { _id: id },
    });
    fecthData();
  };

  const handleChangeSelected = (e) => {
    setUserSelected(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const res = await axios.get(`httpss://ead859eb.ngrok.io/api/notes/author/${userSelected}`);
    const res = await axios.get(`https://taskapp-mern.herokuapp.com/api/notes/author/${userSelected}`);
    setNotes(res.data);
  };

  return (
    <div className='container'>
      <div className='row mb-5'>
        <div className='col-md-12'>
          <h4 className='text-light'>Select User</h4>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <select
                name='userSelected'
                className='form-control'
                onChange={handleChangeSelected}
              >
                <option value='Seleciona Tu Usuario'>Seleciona Tu Usuario</option>
                {
                  users.map((user) => (
                    <option
                      key={user._id}
                      value={user.username}
                    >
                      {user.username}
                    </option>
                  ))
                }
              </select>
            </div>
            <button type='submit' className='btn btn-primary btn-block'>
              Send
            </button>
          </form>
        </div>
      </div>
      <div className='row'>
        {
          notes.map((note) => (
            <div className='col-md-4 p-2' key={note._id}>
              <div className='container'>
                <div className='card p-4'>
                  <p>{note.author}</p>
                  <div className='card-body'>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                    <p><span>{timeago.format(note.date)}</span></p>
                  </div>
                  <Link
                    className=' btn btn-secondary m-4'
                    to={`/edit/${note._id}`}
                  >
                    Edit
                  </Link>
                  <button
                    type='submit'
                    className='btn btn-danger'
                    onClick={() => handleClick(note._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
