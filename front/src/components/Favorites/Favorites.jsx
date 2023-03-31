import React from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import CardFav from "../CardFav/CardFav";
import style from './Favorites.module.css'
import { orderCards, filterCards } from "../../redux/actions";

const Favorites = () => {
	const myFavorites = useSelector((state) => state.myFavorites);
	const dispatch = useDispatch();

	const handleOrder = (event) => {
		dispatch(orderCards(event.target.value));
	};

	const handleFilter = (event) => {
		dispatch(filterCards(event.target.value));
	};

	return (
		<div>
			<div>
				<select name="" id="" onChange={handleOrder}>
					<option value="Ascendente">Ascendente</option>
					<option value="Descendente">Descendente</option>
				</select>
				<select name="" id="" onChange={handleFilter}>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
					<option value="Genderless">Genderless</option>
					<option value="unknown">Unknown</option>
				</select>
			</div>
			<div className={style.favsContainer}>
				{myFavorites.map((character) => (
					<CardFav
						key={character.id}
						name={character.name}
						species={character.species}
						gender={character.gender}
						image={character.image}
						id={character.id}
					></CardFav>
				))}
			</div>
		</div>
	);
};

// const mapStateToProps = (state) => {
// 	return {
// 		myFavorites: state.myFavorites,
// 	};
// };

// export default connect(mapStateToProps)(Favorites);

export default Favorites;
