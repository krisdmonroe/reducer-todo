import React, { useReducer } from 'react'

export const initialState = 
{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
};

export const ToDoReducer = (state, action) => {
    switch(action.type){
        case `ADD_TODO`:
            return {
                initialState:[...state, {item: action.todoText, completed:false }]
            };
            case `REMOVE_TODO`:
                return {
                    state:initialState
                }
                default:
                    return state
    }

}



