import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoLists from './components/TodosList';

function App() {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState ([]);
  return (
    <div className='container' >
      <div className='app-wrapper'>
        <div>
          <Header/>
        </div>
      <div>
        <Form
          input ={input}
          setInput ={setInput}
          todos = {todos}
          setTodos = {setTodos}
        />
        </div>
      </div>
      <TodoLists todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
