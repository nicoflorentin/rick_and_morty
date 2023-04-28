//importar las actions
import { REMOVE_FAVORITE, ADD_FAVORITE, FILTER, ORDER } from "./actions";

const initialState = {
	myFavorites: [],
	allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FAVORITE:
			return {
				...state,
				myFavorites: [...state.myFavorites, action.payload],
				allCharacters: [...state.allCharacters, action.payload],
			};
		case REMOVE_FAVORITE:
			return {
				//hace una copia del estado global y pisa la propiedad especificada con la logica necesaria
				...state,
				myFavorites: state.myFavorites.filter(
					(char) => char.id !== action.payload
				),
				allCharacters: state.allCharacters.filter(
					(char) => char.id !== action.payload
				),
			};
		case FILTER:
			console.log(action.payload)
			if (action.payload === "All") {
				return {...state,
				myFavorites: state.allCharacters}
			} else {
				const { allCharacters: filterAll } = state;
				const filtered = filterAll.filter(
					(char) => char.gender === action.payload
				);
				return {
					...state,
					myFavorites: filtered,
				};
			}
		case ORDER:
			const orderAllCharacters = [...state.allCharacters];
			const sorted = orderAllCharacters.sort((a, b) => {
				if (action.payload === "Ascendente") {
					return a.id - b.id;
				} else {
					return b.id - a.id;
				}
			});
			return {
				...state,
				myFavorites: sorted,
			};
		default:
			return state;
	}
};

export default rootReducer;
