const todo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			}
		case 'TOGGLE_TODO':

			if (state.id !== action.id) {
				return state
			}

			return Object.assign({}, state, {
				completed: !state.completed
			})
		case 'GET_ALL_TODOS':
			return state
		default:
			return state
	}
}

const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			]
		case 'TOGGLE_TODO':
			return state.map(t =>
				todo(t, action)
			)
		case 'GET_ALL_TODOS':
			return state = action.cleanList
		case 'DELETE_TODO':
			return state.filter(todo => {
				return todo.id !== action.id
			});
		default:
			return state
	}
}

export default todos
