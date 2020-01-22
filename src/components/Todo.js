import React from 'react';


const Todo = (props) => {
console.log('this is props', props.state)

const handleToggle = (id) => {
    props.dispatch({ type: "COMPLETED", id: id })
}
    return (
        <div className="todoArea">
            {props.state.map(todo => {
                return (
                    <div className={`${todo.completed ? "completed" : ""}`} onClick={() => handleToggle(todo.id)} key={todo.id}>
                        <p>{todo.item}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Todo; 