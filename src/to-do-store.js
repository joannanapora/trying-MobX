import React from 'react';
import {useLocalStore} from 'mobx-react';

export const StoreContexToDos = React.createContext();

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
  
    return <StoreContexToDos.Provider value={store}>{children}</StoreContexToDos.Provider>;
  };

  export default StoreProvider;