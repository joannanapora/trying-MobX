import React from 'react';
import {useLocalStore} from 'mobx-react';
import {StoreContex} from './App'

const StoreProvider = ({ children }) => {
    const store = useLocalStore(() => ({
      toDos: ["get the job"],
      addToDo: (toDo) => {
        store.toDos.push(toDo)
      },
      get toDosCount() {
        return store.toDos.length;
      }
    }));
  
    return <StoreContex.Provider value={store}>{children}</StoreContex.Provider>;
  };

  export default StoreProvider;