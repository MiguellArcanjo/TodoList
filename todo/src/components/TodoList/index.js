import React from 'react';
import { MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types';
import './style.css';

function TodoList({todos, onToggle, onRemove}) {

    return (
        <ul className='todo-list'>
            {
            todos.map((todo) => (
                <li key={todo.id.toString()}>
                <span 
                    className={['todo', todo.checked ? 'checked' : ''].join(' ')}
                    onClick={() => onToggle(todo)}
                    role='button'
                    tabIndex={0}>{todo.title}</span>
                    
                <button 
                    type='button' 
                    className='remove'
                    onClick={() => onRemove(todo)}>
                    <MdDelete size={28} />
                </button>
                </li>
            ))
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            checked: PropTypes.bool.isRequired,
        })
    ).isRequired,
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
}

export default TodoList;