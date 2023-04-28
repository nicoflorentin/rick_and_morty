import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { useEffect, useState } from "react";
import star from "../../images/star.svg";
import starFilled from "../../images/star-filled.svg";
import trash from '../../images/trash.svg'

const Card = ({
	name,
	species,
	gender,
	image,
	id,
	onClose,
	myFavorites,
	addFavorite,
	removeFavorite,
}) => {

	// setea el estado de la card para saber si esta en favoritos
	const [isFav, setIsFav] = useState(false);

	//busca en el estado global redux si la carta esta en favoritos, en caso que si, setea el estado en true
	useEffect(() => {
		myFavorites.forEach((fav) => {
			if (fav.id === id) {
				setIsFav(true);
			}
		});
	}, [myFavorites]);

	//maneja los favoritos, si no esta setea true y lo pone en el estado y si esta setea false
	const handleFavorite = () => {
		if (isFav) {
			setIsFav(false);
			removeFavorite(id);
		} else {
			setIsFav(true);
			addFavorite({ name, species, gender, image, id });
		}
	};
	return (
		<div className={style.cardContainer}>
			<div className={style.upperBar}>
				{isFav ? (
					<button
						className={style.favButton}
						onClick={handleFavorite}
					>
						<img className={style.image} src={starFilled} alt="star" />
					</button>
				) : (
					<button
						className={style.favButton}
						onClick={handleFavorite}
					>
						<img src={star} alt="star" />
					</button>
				)}
				<button
					className={style.cardButton}
					onClick={() => {
						onClose(id);
						removeFavorite(id)
					}}
				>
					<img src={trash} alt="" />
				</button>
			</div>
			<Link className={style.charName} to={`/detail/${id}`}>
				<img className={style.img} src={image} alt={`imagen ${image}`} />
				<strong> {name} </strong>
			</Link>
			<p>{species}</p>
			<p>{gender}</p>
		</div>
	);
};

//mapea el estado global a las props del componente. retorna un objeto con el nombre de la prop para hacer destructuring
const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites,
	};
};

//mapea la funcion que hace dispatch a las props. retorna un objeto con propiedades que tienen una funcion dentro que cada una retorna una 
//hay que importar las actions y darle la capacidad de hacer dispatch
const mapDispatchToProps = (dispatch) => {
	return {
		addFavorite: (character) => {
			return dispatch(actions.addFavorite(character));
		},
		removeFavorite: (id) => {
			return dispatch(actions.removeFavorite(id));
		},
	};
};

//conecta el componente con el estado global, hay que importar 'connect desde redux'
export default connect(mapStateToProps, mapDispatchToProps)(Card);
