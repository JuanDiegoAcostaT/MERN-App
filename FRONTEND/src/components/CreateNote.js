import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CreateNote() {

  const [users, setUsers] = useState([]);

  const fecthData = async () => {
    const res = await axios.get('http://localhost:3000/api/users');
    setUsers(res.data);
  };

  useEffect(() => {
    fecthData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
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
            >
              {
                users.map((user) => (
                  <option key={user._id}>
                    {user.username}
                  </option>
                ))
              }
            </select>
          </div>
          <button type='submit' className='btn btn-primary'>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
