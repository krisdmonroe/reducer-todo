import React from 'react';
import './../App.css';

const Todo = (props) => {
console.log('this is props', props.state)

    return (
        <div className="todoArea">
            {props.state.map(todo => {
                return (
                    <div key={todo.id}>
                        <p>{todo.item}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Todo; 