import React from 'react';
import {useObserver} from 'mobx-react';
import {StoreContex} from './App'

const ToDosHeader = () => {
    const store = React.useContext(StoreContex);
    return useObserver(() => (
      <h1>You have {store.toDosCount} {store.toDos.length === 1 ? 'thing' : 'things'} to do!</h1>
    ))
  };

  export default ToDosHeader;