import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

const URL_API = "https://rickandmortyapi.com/api";
const API_KEY = "12c293d7c01b.1fdc47930d06d48e2f63";

const Detail = () => {
	const { id } = useParams();
	const [character, setCharacter] = useState({});
	useEffect(() => {
		fetch(`${URL_API}/character/${id}?key=${API_KEY}`)
			.then((response) => response.json())
			.then((char) => {
				if (char.name) {
					setCharacter(char);
				} else {
					window.alert("No hay personajes con ese ID");
				}
			})
			.catch((err) => {
				window.alert("No hay personajes con ese ID");
			});
		return setCharacter({});
	}, [id]);

	return (
		<div className={style.detailContainer}>
			<img className={style.charImage} src={`${character.image}`} alt={`${character.name}`} />
			<div className={style.description}>
				<h2>{`${character.name}`}</h2>
				<div>Species: {`${character.species}`}</div>
				<div>Type: {character.type ? character.type : "undefined"}</div>
				<div>Gender: {`${character.gender}`}</div>
				<div>Origin: {`${character.origin?.name}`}</div>
				<div>Location: {`${character.location?.name}`}</div>
				<div>Status: {`${character.status}`}</div>

			</div>
		</div>
	);
};

export default Detail;
