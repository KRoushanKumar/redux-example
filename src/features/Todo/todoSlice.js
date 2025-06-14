import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        }, 
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        UpdateTodo: (state, action) => {
            const {id, text, completed} = action.payload;
            console.log('action.payload', action.payload)
            console.log('completed', completed)
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.completed = completed; // Toggle completed status
            }
        },
    },
});
export const { addTodo, removeTodo, UpdateTodo } = todoSlice.actions;
export default todoSlice.reducer;