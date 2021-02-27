import React from 'react';
import {StoreContex} from './App'


const ToDoForm = () => {
    const store = React.useContext(StoreContex);
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
      <button type='submit'>Add new thing to do!</button>
    </form>
  )
  }

  export default ToDoForm;