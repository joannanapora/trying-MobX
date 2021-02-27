import "./App.css";
import React from "react";
import ToDosHeader from './to-do-header';
import ToDoList from './to-do-list';
import ToDoForm from './to-do-form';
import StoreProvider from './to-do-store';


function App() {
  return (
    <StoreProvider>
      <ToDosHeader/>
      <ToDoList />
      <ToDoForm/>
    </StoreProvider>
  );
}

export default App;
