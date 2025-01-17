import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}


//here, name is the property of the slice, initialState is the initial state of the slice, and reducers is an object that contains the reducers for the slice.
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updatetodo: (state, action)=> {

            const id = action.payload.id;
            const text = action.payload.text;
            state.todos = state.todos.map((todo) => {
                if (todo.id === id) {
                  todo.text = text;
                }
                return todo;
            });
        }
    }
})

export const {addTodo, removeTodo, updatetodo} = todoSlice.actions

export default todoSlice.reducer

//reducers are functions that specify how the state of the slice should change in response to actions. Each reducer function takes two arguments: the current state of the slice, and the action object that was dispatched. The reducer function then returns a new state object that reflects the changes made by the action.

//state and action are the two arguments that are passed to the reducer function. The state argument is the current state of the slice, and the action argument is the action object that was dispatched. The action object has a type property that specifies the type of action that was dispatched, and a payload property that contains the data that was passed to the action creator. In this case, the payload is the text of the todo item that was added.