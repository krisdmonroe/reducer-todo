import React, {useReducer, useState } from 'react';
import './App.css';
import {ToDoReducer} from './Reducers/ToDoReducer'
import {initialState} from './Reducers/ToDoReducer'

function App() {
  const [state, dispatch] = useReducer(ToDoReducer, initialState)
  const [todoText, setTodoText] = useState('')
  const [todo, setTodo] = useState('')

  const handleChanges = e => {
    setTodoText(e.target.value)
}
console.log(state)
  return (
    <div className="App">
      <input 
          type='text'
          name='todo'
          value={todoText}
          onChange={handleChanges}
      />
     <p> {state.item} </p>
     <button onClick={() => dispatch({ type: 'ADD_Todo', payload: todoText})}> Add Todo</button>
     <button> Clear Completed</button>
    </div>
  );
}

export default App;





