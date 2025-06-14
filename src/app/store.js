import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/Todo/todoSlice";
export const store = configureStore({
    reducer: {
        // Add your reducers here
        // Example: user: userReducer,
        counter: counterReducer,
        todo: todoReducer,
    },
})