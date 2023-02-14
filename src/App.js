import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoLists from './components/TodosList';
import 'font-awesome/css/font-awesome.min.css';


function App() {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState ([]);
  const [editTodo, setEditTodo] = useState (null);

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
          setEditTodo = {setEditTodo}
          editTodo = {editTodo}
        />
        </div>
        <div>
        <TodoLists todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
      </div>
    </div>
  );
};

export default App;
