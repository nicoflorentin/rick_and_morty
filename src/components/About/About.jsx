import React from "react";
import style from "./About.module.css";
import morty from "../../icons/mortylogo.png";

const About = () => {
	return (
		<div className={style.container}>
			<div className={style.content}>
				<h1>About me</h1>
				<p>Mi nombre es Nicolás Florentín soy desarollador web</p>
				<p>
					Ésta aplicación consulta una base de datos basada en la
					famosa serie de televisión "Rick and Morty" y su
					funcionalidad principal es mostrar en pantalla información
					acerca de los personajes principales o que alguna vez hayan
					aparecido en el transcurso de los capítulos
				</p>
				<p>Muchas gracias por visitar el sitio!</p>
			</div>
			<div className={style.img}>
				<img src={morty} alt="" />
			</div>
		</div>
	);
};

export default About;
