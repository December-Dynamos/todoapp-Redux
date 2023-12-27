
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actionTypes";


// {
//     id: 1,
//     title: 'Learn React',
// }


export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

// todo => update

export const updateTodo = (id, updateTitle) => {
    return {
        type: UPDATE_TODO,
        updateId: id,
        updateTitle: updateTitle
    }
}