// react code for todo list 

import React, { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);
  
    const addTodo = (e) => {    
        e.preventDefault();
        const newTodo = e.target.elements.todo.value;
        setTodos([...todos, newTodo]);
        e.target.elements.todo.value = '';
    };
    
  return ( 
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input type="text" name="todo" placeholder="Add a new todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
  