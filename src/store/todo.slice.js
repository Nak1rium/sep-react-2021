import {createSlice} from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                ...action.payload.todo
            })
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(car => car.id !== action.payload.id)
        },
        toggleCompletedTodo: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? {
                    ...todo,
                    completed: !todo.completed
                }
                : todo)
        }
    }
});

const todoReducer = todoSlice.reducer;

export const {addTodo, deleteTodo, toggleCompletedTodo} = todoSlice.actions;
export default todoReducer



