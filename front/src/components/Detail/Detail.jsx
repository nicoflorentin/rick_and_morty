import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./Detail.module.css";
import arrowLeft from '../../images/arrow-left.svg'

const Detail = () => {
	const { id } = useParams();
	const navigate = useNavigate()
	const [character, setCharacter] = useState({});
	useEffect(() => {
		fetch(`http://localhost:3001/rickandmorty/detail/${id}`)
			.then((response) => response.json())
			.then((char) => {
				console.log(char)
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

	const handleBack = () => {
		navigate('/home')
	}

	return (
		<div className={style.container}>
			<div className={style.upperBar}>
				<button onClick={handleBack}><img src={arrowLeft} className={style.arrowLeft}/></button>
			</div>
			<div className={style.detailContainer}>
				<img className={style.charImage} src={`${character.image}`} alt={`${character.name}`}/>
				<div className={style.description}>
					<h2>{`${character.name}`}</h2>
					<div>Species: {`${character.species}`}</div>
					{/* <div>Type: {character.type ? character.type : "undefined"}</div> */}
					<div>Gender: {`${character.gender}`}</div>
					<div>Origin: {`${character.origin?.name}`}</div>
					{/* <div>Location: {`${character.location?.name}`}</div> */}
					{/* <div>Status: {`${character.status}`}</div> */}
				</div>
			</div>
		</div>
	);
};

export default Detail;
