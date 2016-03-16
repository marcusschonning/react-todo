import React, { PropTypes } from 'react'
import Todo from './Todo';

require('../styles/todo.scss');

const TodoList = ({ todos, onTodoClick, onDeleteTodo }) => (
  <ul className='list'>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id, todo.completed)}
        onDeleteTodo={() => onDeleteTodo(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
}

export default TodoList
