import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./Detail.module.css";
import arrowLeft from "../../images/arrow-left.svg";
import Loader from "../Loader/Loader";

const URL_API = "https://rickandmortyapi.com/api";
const API_KEY = "API_KEY=12c293d7c01b.1fdc47930d06d48e2f63";

const Detail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [character, setCharacter] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// fetch(`http://localhost:3001/rickandmorty/detail/${id}`)
		fetch(`${URL_API}/character/${id}?key=${API_KEY}`)
			.then((response) => response.json())
			.then((char) => {
				if (char.name) {
					setCharacter(char);
					setLoading(false);
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
		navigate("/home");
	};

	return (
		<div className={style.container}>
			{loading && <Loader />}

			{!loading && (
				<>
					<div className={style.upperBar}>
						<button onClick={handleBack}>
							<img src={arrowLeft} className={style.arrowLeft} />
						</button>
					</div>
					<div className={style.detailContainer}>
						<img
							className={style.charImage}
							src={`${character.image}`}
							alt={`${character.name}`}
						/>
						<div className={style.description}>
							<h2>{`${character.name}`}</h2>
							<div>Species: {`${character.species}`}</div>
							<div>
								Type:{" "}
								{character.type ? character.type : "undefined"}
							</div>
							<div>Gender: {`${character.gender}`}</div>
							<div>Origin: {`${character.origin?.name}`}</div>
							{/* <div>Location: {`${character.location?.name}`}</div>
							<div>Status: {`${character.status}`}</div> */}
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Detail;
