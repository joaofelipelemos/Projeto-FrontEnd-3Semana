import { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import crypto from 'crypto'
import './App.css'

const App = () => {
  const ESC_KEY = 27;
  const ENTER_KEY = 13;

  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  const submit = () => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        title: value,
        checked: false 
      }
    ]);
    
    erase();
  }

  const erase = () => {
    setValue('');
  }
  const onChange = (event) => {
    setValue(event.target.value);
  }
  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit()
    } else if (event.which === ESC_KEY) {
      erase();
    }
  }

  const onToggle = (todo) => {
    setTodos(todos.map((obj) => (obj.id === todo.id ? {...obj, checked: !todo.checked } : obj
      )));
  }

  const onRemove = (todo) => {
    setTodos(todos.filter((obj) => obj.id !== todo.id));
  };



  return (
    <section id='App' className='container'>
        <header>
          <h1 className='title'>Tarefas</h1>
        </header>
          <section className='main'>
            <input 
            className='new-todo' 
            placeholder='Oque precisa fazer?'
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            />
            <ul className='todo-list'>
              {todos.map((todo) => (
                  <li key={todo.id}>
                    <span
                    onClick={() => onToggle(todo)}
                    role='button'
                    tabIndex={0}
                    className={['todo', todo.checked ? "checked" : ""].join(" ")}>
                      {todo.title}
                    </span>
                    <button
                    className='remove'
                    type='button'
                    onClick={() => onRemove(todo)}>
                      <MdDelete size={28} />
                    </button>
                  </li>
                ))}
            </ul>
          </section>
    </section>  
  )
}

export default App
