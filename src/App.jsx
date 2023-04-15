import { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import crypto from 'crypto'
import './App.css'

const App = () => {
  const ESC_KEY = 27;
  const ENTER_KEY = 13;

  /* const initialTodos = [
    {id: 1, title: 'Estudar React', checked: false },
    {id: 2, title: 'Estudar Python', checked: true },
    {id: 3, title: 'Fazer tarefas', checked: false },
  ]; */

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
                    <span className='todo'>{todo.title}</span>
                    <button className='remove' type='button'>
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
