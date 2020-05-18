/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import axios from 'axios';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { navigate } from '@reach/router';

export default function CreateNote({ id }) {

  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState(new Date());
  const [editing, setEditing] = useState(false);
  const [_id, setId] = useState();

  const fecthData = async (props) => {
    // const res = await axios.get('https://localhost:3000/api/users');
    const res = await axios.get('https://taskapp-mern.herokuapp.com/api/users');
    // const res = await axios.get('httpss://ead859eb.ngrok.io/api/users');
    setUsers(res.data);
    setUserSelected(res.data[0].username);
    //Esto de arriba es para que por defecto selecione siempre el primer usuaario que este en el <select /
    if (id) {
      // const res = await axios.get(`httpss://ead859eb.ngrok.io/api/notes/${id}`);
      const res = await axios.get(`https://taskapp-mern.herokuapp.com/api/notes/${id}`);
      setTitle(res.data.title);
      setContent(res.data.content);
      setDate(new Date(res.data.date));
      setUserSelected(res.data[0]);
      setEditing(true);
      setId(id);
    }
  };

  useEffect(() => {
    fecthData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editing) {
      // await axios.put(`httpss://ead859eb.ngrok.io/api/notes/${id}`,
      await axios.put(`https://taskapp-mern.herokuapp.com/api/notes/${id}`,
        {
          author: userSelected,
          title,
          content,
          date,
        });
    } else {
      // await axios.post('httpss://ead859eb.ngrok.io/api/notes',
      await axios.post('https://taskapp-mern.herokuapp.com/api/notes',
        {
          author: userSelected,
          title,
          content,
          date,
        });
    }
    setTitle('');
    setContent('');
    navigate('/notes');
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
