import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  // State Values
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null); // which ID will be edited
  const [alert, setAlert] = useState({ 
    show: false, 
    msg: '', 
    type: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!name){ // if value is empty
      //display alert
      showAlert(true, 'danger', 'Please enter value');
    }
    else if (name && isEditing){ // if value and isEditing
      // handle edit
      setList(list.map((item) => {
        if (item.id === editID){
          return {...item, title: name} // change title to current state value
        }
        return item;
      })
      )
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    }
    else {
      // show alert - name value is true
      showAlert(true, 'success', 'item added to the list'); 
      const newItem = {id: new Date().getTime().toString(), title: name}; // newItem
      setList([...list, newItem]); //spread operator to get previous list values 
      setName('');
    }
  };

  // showAlert function - handles alert props
  const showAlert = (show=false, type="", msg="") => {
    setAlert({show,type, msg});
  };

  // clearList function - removes all items from list
  const clearList = () => {
    showAlert(true, 'danger', 'items removed from list');
    setList([]);
  }

  // removeItem function - looks for ID
  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed');
    setList(list.filter((item) => item.id !== id)); // returns items whose id's doesn't match
  }

  // editItem function
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
    
    
  };

  

  return (
    <section className='section-center'>
      <form  className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
        <h3> Grocery List</h3>
        <div className='form-control'>
          <input type='text' className='grocery' placeholder='e.g. eggs' value={name} onChange={(e)=> setName(e.target.value)}>
          </input>
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
      <div className='grocery-container'>
        <List items={list} removeItem={removeItem} editItem={editItem}/>
        <button className='clear-btn' onClick={clearList}>
          Clear Items
        </button>
      </div>
      )}
    </section>
  );
}

export default App;
