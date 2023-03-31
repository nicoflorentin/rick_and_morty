import React from "react";
import style from "./CardFav.module.css";
import { Link } from "react-router-dom";

const CardFav = ({ name, species, gender, image, id }) => {
	return (
		<div className={style.cardContainer}>
			<div>
				<img
					className={style.img}
					src={image}
					alt={`imagen ${image}`}
				/>
			</div>
			<div>
				<Link className={style.charName} to={`/detail/${id}`}>
					<strong> {name} </strong>
				</Link>
				<p> {gender} </p>
				<p> {id} </p>
			</div>
		</div>
	);
};

export default CardFav;
