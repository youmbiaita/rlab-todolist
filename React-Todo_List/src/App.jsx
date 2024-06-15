import { useState, useReducer } from 'react'
import {useImmerReducer } from 'use-immer'
import initialState from './data'
import Reducer from './components/Reducer'
import TodoItem from './components/TodoItem'
import './App.css'

function App() {
  const [state, dispatch] = useImmerReducer(Reducer, initialState)
  const[newTodo, setNewTodo]= useState("")

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch({ type: 'ADD_TODO', payload: newTodo });
      setNewTodo('');
    }
  };

  return (
    <>
      <div>
        <h1>todo list</h1>
        <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New todo"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {state.map((todo) => (
          <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>      
      </div>
    </>
  )
}

export default App
