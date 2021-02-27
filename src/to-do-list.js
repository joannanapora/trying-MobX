import React from 'react';
import {useObserver} from 'mobx-react';
import {StoreContex} from './App'


const ToDoList = () => {
    const store = React.useContext(StoreContex);
  
    return useObserver(()=>(
      <ul>
        {store.toDos.map((toDo) => (
          <li key={toDo}>{toDo}</li>
        ))}
      </ul>
    )) 
  };

  export default ToDoList;