import React, { useState, useEffect } from 'react';
import axios from 'axios';

import * as timeago from 'timeago.js';

export default function NotesList() {

  const [notes, setNotes] = useState([]);

  const fecthData = async () => {
    const res = await axios.get('http://localhost:3000/api/notes');
    setNotes(res.data);
  };

  useEffect(() => {
    fecthData();
  }, []);

  const handleClick = async (id) => {
    await axios.delete(`http://localhost:3000/api/notes/${id}`, {
      data: { _id: id },
    });
    fecthData();
  };

  return (
    <div className='container'>
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
