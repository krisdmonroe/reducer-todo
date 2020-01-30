import React, {useReducer, useState } from 'react';
import {ToDoReducer} from '../Reducers/ToDoReducer'
import {initialState} from '../Reducers/ToDoReducer'
import Todo from '../components/Todo'

function TodoList() {
  const [state, dispatch] = useReducer(ToDoReducer, initialState);
  const [todo, setTodo] = useState('');
  

  const handleChanges = e => {
    setTodo(e.target.value)
}

const handleSubmit = e => {
  e.preventDefault();
  dispatch({ type: "ADD-TODO", payload: todo });
}
const handleClear = e => {
    e.preventDefault();
    dispatch({ type: "DELETE-TODO", payload: todo })
}
console.log(state)
  return (
    <div className="App">
      <input 
        id='todo'
        type='text'
        name='todo'
        value={todo}
        onChange={handleChanges}
      />
     <button onClick={handleSubmit}> Add Todo</button>
     <button onClick={handleClear}> Clear Completed</button>
     <Todo id={state.id} todo={todo} dispatch={dispatch} state={state} />
    </div>
  );
}

export default TodoList;


