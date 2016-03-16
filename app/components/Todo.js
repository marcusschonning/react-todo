import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text, onDeleteTodo }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <span onClick={onClick}>{text}</span>
    <a href='#' onClick={
    	e => {
    		e.preventDefault()
    		onDeleteTodo()
    	}
    }><i className='fa fa-remove'></i></a>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
}

export default Todo
