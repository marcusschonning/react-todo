import React, { PropTypes } from 'react'
import Todo from './Todo';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

require('../styles/todo.scss');

const TodoList = ({ todos, onTodoClick, onDeleteTodo }) => (
  <ul className='list'>
	<ReactCSSTransitionGroup
		transitionName='listItem'
		transitionEnterTimeout={500}
		transitionLeaveTimeout={500}
	>
    {todos.map(todo =>
			<Todo
				key={todo.id}
				{...todo}
				onClick={() => onTodoClick(todo.id, todo.completed)}
				onDeleteTodo={() => onDeleteTodo(todo.id)}
			/>
    )}
	</ReactCSSTransitionGroup>
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
