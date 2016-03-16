import React from 'react'
import Filter from './Filter'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className='wrapper'>
  	<h1 className='title'>Todolist</h1>
    <AddTodo />
    <Filter />
    <VisibleTodoList />
  </div>
)

export default App
