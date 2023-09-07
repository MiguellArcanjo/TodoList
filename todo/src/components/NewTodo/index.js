import React, { useState } from 'react'

function NewTodo({ onNewTodo }) {
    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;

    const [value, setValue] = useState('');


    const erase = () => {
        setValue('');
    };
    
    const onChange = (e) => {
    setValue(e.target.value);
    };

    const submit = () => {
        if ( onNewTodo ) {
            onNewTodo(value);
            erase();
        }
    };

    const onKeyDown = (e) => {
        if (e.which === ENTER_KEY) {
            submit();
    }
    else if (e.which === ESCAPE_KEY) {
        erase();
    }
    };

    return (
        <div>
            <input 
            className='new-todo' 
            placeholder='o que precisa ser feito?'
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}/> 
        </div>
    )
}

export default NewTodo