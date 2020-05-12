import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CreateUser() {

  const [users, setUsers] = useState([]);
  const [nameuser, setNameUser] = useState('');

  const fecthData = async () => {
    const res = await axios.get('http://localhost:3000/api/users');
    setUsers(res.data);
  };

  useEffect(() => {
    fecthData();
  }, []);

  const onChangeUsername = (e) => {
    setNameUser(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/api/users',
      {
        username: nameuser,
      });
    setNameUser('');
    fecthData();
  };

  const handleDoubleClick = async (id) => {
    await axios.delete(`http://localhost:3000/api/users/${id}`);
    fecthData();
  };

  return (
    <div className='row'>
      <div className='col-md-4'>
        <div className='card card-body'>
          <h3>Create New User</h3>
          <form action='' onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                value={nameuser}
                onChange={onChangeUsername}
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Create
            </button>
          </form>
        </div>
        <p>Double Click to Delete User</p>
      </div>
      <div className='col-md-8'>
        <ul className='list-group'>
          {
            users.map((user) => (
              <li
                className='list-group-item list-group-item-action'
                key={user._id}
                onDoubleClick={() => handleDoubleClick(user._id)}
              >
                {
                  user.username
                }
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}
