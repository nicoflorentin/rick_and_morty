//exporta las variables con el mismo nombre en string para no cometer errores de tipeo
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

//funcion que se exporta al reducer, el reducer maneja el dato que se guarda y al mismo tiempo tiene acceso al estado global
//las actions dicen que tipo de accion se va a ejecutar y mandan por parametro el dato al reducer

export const addFavorite = (character) => {
	return function (dispatch) {
		dispatch({ type: ADD_FAVORITE, payload: character });
	};
};

export const removeFavorite = (id) => {
	return function (dispatch) {
		dispatch({ type: REMOVE_FAVORITE, payload: id });
	};
};

export const orderCards = (order) => {
	return function (dispatch) {
		dispatch({ type: ORDER, payload: order });
	};
};

export const filterCards = (gender) => {
	return function (dispatch) {
		dispatch({ type: FILTER, payload: gender });
	};
};