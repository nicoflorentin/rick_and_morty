import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { useEffect, useState } from "react";
import star from "../../icons/star.svg";
import starFilled from "../../icons/star-filled.svg";
import trash from '../../icons/trash.svg'

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
	console.log(star);
	const [isFav, setIsFav] = useState(false);

	useEffect(() => {
		myFavorites.forEach((fav) => {
			if (fav.id === id) {
				setIsFav(true);
			}
		});
	}, [myFavorites]);

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
						<img src={starFilled} alt="star" />
					</button>
				) : (
					<button
						className={style.favButton}
						onClick={handleFavorite}
					>
						<img onClick={handleFavorite} src={star} alt="star" />
					</button>
				)}
				<button
					className={style.cardButton}
					onClick={() => {
						onClose(id);
					}}
				>
					<img src={trash} alt="" />
				</button>
			</div>
			<br />
			<img className={style.img} src={image} alt={`imagen ${image}`} />
			<Link className={style.charName} to={`/detail/${id}`}>
				<strong> {name} </strong>
			</Link>
			<p>Species: {species}</p>
			<p>Gender: {gender}</p>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites,
	};
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Card);
