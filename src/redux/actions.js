export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'

export const addFavorite = (character) => {
	return function (dispatch) {
		dispatch({ type: ADD_FAVORITE, payload: character })
	}
};

export const removeFavorite = (id) => {
	return function (dispatch){
		dispatch({type: REMOVE_FAVORITE, payload: id})
	}
}