import fetch from 'isomorphic-fetch'

let nextTodoId = 0

export const getAllTodos = (todos, dispatch) => {
	return (dispatch) => {
		fetch('./../app/api/getAll.php').then(function(res) {
			return res.json();
		}).then(function(todolist) {
			var cleanList = [];
			Object.keys(todolist).forEach(function(key) {
				var todo = {};
				if(todolist[key].completed === "0"){
					todo.completed = false;
				} else {
					todo.completed = true;
				}
				todo.id = parseInt(todolist[key].id, 10);
				todo.text = todolist[key].todo;
				cleanList.push(todo);
			});
			dispatch({
				type: 'GET_ALL_TODOS',
				cleanList
			});
		});
	}
}

export const addTodo = (text, dispatch) => {
  return (dispatch) => {
  	fetch('./../app/api/insert.php?todo='+text).then(function(res) {
  		return res.text();
  	}).then(function(insertId) {
  		dispatch({
  			type: 'ADD_TODO',
  			id: parseInt(insertId, 10),
  			text: text
  		});
  	});
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id, completed, dispatch) => {
	return (dispatch) => {
		fetch('./../app/api/update.php?todoId=' + id + '&completed=' + !completed).then(function(res) {
			return res.text();
		}).then(function(res2) {
			if (res2 === 'success') {
				dispatch({
					type: 'TOGGLE_TODO',
					id
				});
			}
		});
	}
}

export const deleteTodo = (id, dispatch) => {
	return (dispatch) => {
		fetch('./../app/api/delete.php?id=' + id).then(function(res) {
			return res.text();
		}).then(function(res2) {
			if (res2 === 'success') {
				dispatch({
					type: 'DELETE_TODO',
					id
				});
			}
		});
	}
}
