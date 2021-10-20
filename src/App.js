import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  // State Values
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null); // which ID will be edited
  const [alert, setAlert] = useState({ show: false, msg: '', type: ''});

  return (
    <article>
      <div className='container'>
        <h2>Grocery List</h2>
      </div>
    </article>
  );
}

export default App;
