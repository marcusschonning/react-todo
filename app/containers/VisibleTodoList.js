import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, getAllTodos, deleteTodo } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id, completed) => {
      dispatch(toggleTodo(id, completed));
    },
    onDeleteTodo: (id) => {
    	dispatch(deleteTodo(id));
    },
    fetchAllTodos: () => {
	    dispatch(getAllTodos());
    }
  }
}


class TodosFetcher extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount () {
    	this.props.fetchAllTodos();
    }

    componentWillUpdate () {
    	console.log(this.props.todos);
    	console.log('hejhej');
    }

    render() {
        return <TodoList {...this.props} />;
    }
}


const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosFetcher)

export default VisibleTodoList
