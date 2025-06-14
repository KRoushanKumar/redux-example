import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, UpdateTodo } from './todoSlice';
import { nanoid } from '@reduxjs/toolkit';
function Todo() {
  const [value, setValue] = React.useState('');
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const handleAddTodo = () => {

    dispatch(addTodo(
      {
        id: nanoid(),
        text: value,
        completed: 'Not Completed'
      }
    ));
    setValue('');
  };
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };
  const handleUpdateTodo = (id, completed) => {
    dispatch(UpdateTodo({ id, completed }));
  }
  return (
    <div>
      <input type="text" placeholder="Add a new todo" value={value} onChange={(e) => { setValue(e.target.value) }} />
      <button onClick={handleAddTodo}>
        Add Todo
      </button>
      <h2>Todo List</h2>
      {
        todos.map((todo) => (
          <div key={todo.id}>
            <span >
              {todo.text}
            </span>
            <span >
              {todo.completed === 'Completed' ? ' (Completed)' : ' (Not Completed)'}
            </span>
            <button onClick={() => handleRemoveTodo(todo.id)}>
              Remove Todo
            </button>
            <button onClick={() => handleUpdateTodo(todo.id, 'Completed')}>
              click to complete
            </button>
          </div>
        ))
      }


    </div>
  )
}

export default Todo;
