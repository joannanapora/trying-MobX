import React from 'react';
import {StoreContexToDos} from './to-do-store';


const ToDoForm = () => {
    const store = React.useContext(StoreContexToDos);
    const [value, setValue] = React.useState('')
  
  return (
    <form onSubmit={e=>
    { 
      store.addToDo(value);
      setValue('');
      e.preventDefault();
    }
    }>
      <input value={value} onChange={e=>{setValue(e.target.value)}}></input>
      <button type='submit'>ADD!</button>
    </form>
  )
  }

  export default ToDoForm;