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

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  return (
    <section className='section-center'>
      <form  className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3> Grocery List</h3>
      </form>
      <div className='grocery-container'>
        <List />
        <button className='clear-btn'>
          Clear Items
        </button>
      </div>
    </section>
  );
}

export default App;
