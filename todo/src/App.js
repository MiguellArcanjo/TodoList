import './App.css';
import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import NewTodo from './components/NewTodo';

const App = () => {

  const [todos, setTodos] = useState([]);


  const toggle = (todo) => {
    setTodos(todos.map((obj) => (obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj)))
  }

  const onRemove = (todo) => {
    setTodos(todos.filter((obj) => obj.id !== todo.id));
  }

  const onNewTodo = (value) => {
    setTodos([...todos, {
      id: new Date().getTime(),
      title: value,
      checked: false,
    }])
  }

  return(
  
    <section id='app' className='container'>

      <header>
        <h1 className='title'>Todo</h1>
      </header>
  
      <section className='main'>
        <NewTodo onNewTodo={onNewTodo}/>

        <ul className='todo-list'>
          {
            todos.map((todo) => (
              <li key={todo.id.toString()}>
                <span 
                  className={['todo', todo.checked ? 'checked' : ''].join(' ')}
                  onClick={() => toggle(todo)}
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
      </section>
  
    </section>
  );
}

export default App;
