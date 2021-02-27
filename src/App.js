import "./App.css";
import React from "react";
import { useLocalStore } from "mobx-react";

const StoreContex = React.createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    toDos: ["get the job"],
  }));

  return <StoreContex.Provider value={store}>{children}</StoreContex.Provider>;
};

const ToDoList = () => {
  const store = React.useContext(StoreContex);

  return (
    <ul>
      {store.toDos.map((toDo) => (
        <li key={toDo}>{toDo}</li>
      ))}
    </ul>
  );
};

function App() {
  return (
    <StoreProvider>
      <ToDoList />
    </StoreProvider>
  );
}

export default App;
