import axios from "axios";
//exporta las variables con el mismo nombre en string para no cometer errores de tipeo
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";


//funcion que se exporta al reducer, el reducer maneja el dato que se guarda y al mismo tiempo tiene acceso al estado global
//las actions dicen que tipo de accion se va a ejecutar y mandan por parametro el dato al reducer

// export const getFavorites = () => {
// 	try {
// 		return async function (dispatch) {
// 			const response = await axios.get('http://localhost:3001/rickandmorty/fav')
// 			dispatch({ type: GET_FAVORITE, payload: response.data });
// 		};
// 	} catch (error) {
// 		console.log(error.message)
// 	}
// }

export const addFavorite =  (character) => {
	try {
		return async function (dispatch) {
			const response = await axios.post('http://localhost:3001/rickandmorty/fav', character)
			dispatch({ type: ADD_FAVORITE, payload: response.data });
		};
	} catch (error) {
		console.log(error.message)
	}
};

export const removeFavorite = (id) => {
	try {
		return async function (dispatch) {
			await axios.delete(`http://localhost:3001/rickandmorty/delete/${id}`)
			dispatch({ type: REMOVE_FAVORITE, payload: id });
		};
	} catch (error) {
		console.log(error.message)
	}
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
