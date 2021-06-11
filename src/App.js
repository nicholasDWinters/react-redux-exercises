import './App.css';
import React from 'react';
import MemeForm from './MemeForm';
import Meme from './Meme';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';


function App() {
  // let todos = useSelector(store => store.todos);
  let memes = useSelector(store => store.memes);
  let dispatch = useDispatch();

  // const addTodo = (todo) => {
  //   dispatch({ type: 'ADD', payload: { ...todo, id: uuid() } });
  //   console.log(todos);
  // }

  // const deleteTodo = (id) => {
  //   dispatch({ type: 'DELETE', payload: id });
  //   console.log(id);
  // }
  const addMeme = (meme) => {
    dispatch({ type: 'ADD', payload: { ...meme, id: uuid() } });

  }

  const deleteMeme = (id) => {
    dispatch({ type: 'DELETE', payload: id });

  }

  return (
    <div className="App">

      {/* <TodoForm addTodo={addTodo} />
      {todos.map(todo =>
        <Todo key={todo.id} deleteTodo={deleteTodo} todo={todo.todo} id={todo.id} />)} */}
      <MemeForm addMeme={addMeme} />
      {memes.map(meme =>
        <Meme key={meme.id} deleteMeme={deleteMeme} top={meme.top} bottom={meme.bottom} url={meme.url} id={meme.id} />
      )}
    </div>
  );
}

export default App;
