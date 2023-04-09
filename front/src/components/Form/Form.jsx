import React, { useState } from "react";
import style from "./Form.module.css";
import validation from "./validation";
import rick from "../../images/rick.png";

const Form = ({ login }) => {

	//setea un estado con los datos de los campos del fomulario
	const [userData, setUserData] = useState({
		userName: "",
		password: "",
	});

	//setea un estado con strings que indican el tipo de error por campo del formulario
	const [errors, setErrors] = useState({
		userName: "",
		password: "",
	});

	//guarda los valores de los campos en el estado, pisa los valores del objeto segun el nombre del value
	const handleInputChange = (event) => {
		const property = event.target.name;
		const value = event.target.value;

		setUserData({
			...userData,
			[property]: value,
		});

		//ejecuta la funcion validadora, manda el objeto con los datos, el estado error, y la funcion de setear errores
		validation({ ...userData, [property]: value }, errors, setErrors);
	};


	const handleSubmit = (event) => {
		//preventDefault para evitar que la pagina se recargue cada vez que se hace un submit
		event.preventDefault();
		login(userData);
	};

	return (
		<div className={style.formContainer}>
			<div className={style.form}>
				<img className={style.img} src={rick} alt="" />
				<form onSubmit={handleSubmit}>
					<label htmlFor="userName">Username</label>
					<br />
					<input
						type="text"
						name="userName"
						value={userData.userName}
						onChange={handleInputChange}
						placeholder="nicoflorentin@mail.com"
					/>
					<p>{errors.userName}</p>
					<label htmlFor="password">Password</label>
					<br />
					<input
						type="text"
						name="password"
						value={userData.password}
						onChange={handleInputChange}
						placeholder="pass123"
					/>
					<p>{errors.password}</p>

					<button className={style.loginButton} type="submit">
						Login
					</button>
				</form>
			</div>
			
		</div>
	);
};

export default Form;
