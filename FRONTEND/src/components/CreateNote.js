/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import axios from 'axios';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { navigate } from '@reach/router';

export default function CreateNote(props) {

  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState(new Date());

  const fecthData = async () => {
    const res = await axios.get('http://localhost:3000/api/users');
    setUsers(res.data);
  };

  useEffect(() => {
    fecthData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/api/notes',
      {
        author: userSelected,
        title,
        content,
        date,
      });
    setTitle('');
    setContent('');
    navigate('/');
  };

  const handleChangeSelected = (e) => {
    setUserSelected(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handleOnchangeDate = (date) => {
    setDate(date);
  };

  return (
    <div className='col-md-6 offset-md-3'>
      <div className='card card-body'>
        <h4>Create Note</h4>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <select
              name='userSelected'
              className='form-control'
              onChange={handleChangeSelected}
            >
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
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Title'
              name='title'
              required
              onChange={handleChangeTitle}
              value={title}
            />
          </div>
          <div className='form-group'>
            <textarea
              name='content'
              className='form-control'
              placeholder='Content'
              required
              onChange={handleChangeContent}
              value={content}
            />
          </div>
          <div className='form-group'>
            <DatePicker
              className='form-control'
              selected={date}
              onChange={handleOnchangeDate}
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
