import React from 'react';
import {useObserver} from 'mobx-react';
import {StoreContexToDos} from './to-do-store';


const ToDoList = () => {

    const store = React.useContext(StoreContexToDos);
  
    return useObserver(()=>(
      <ul>
        {store.toDos.map((toDo) => (
          <li key={toDo}>{toDo}</li>
        ))}
      </ul>
    )) 
  };

  export default ToDoList;