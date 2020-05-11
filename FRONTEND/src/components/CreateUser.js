import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CreateUser() {

  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fecthData = async () => {
      const res = await axios.get('http://localhost:3000/api/users');
      setUsers(res.data);
    };
    fecthData();
  }, [users]);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };

  return (
    <div className='row'>
      <div className='col-md-4'>
        <div className='card card-body'>
          <h3>Create New User</h3>
          <form action=''>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                onChange={onChangeUsername}
              />
            </div>
          </form>
        </div>
      </div>
      <div className='col-md-8'>
        <ul className='list-group'>
          {
            users.map((user) => (
              <li key={user._id} className='list-group-item list-group-item-action'>
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
