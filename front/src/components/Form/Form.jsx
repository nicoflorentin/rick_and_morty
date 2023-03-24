import React, { useState } from "react";
import style from "./Form.module.css";
import validation from "./validation";
import rick from "../../images/rick.png";

const Form = ({ login }) => {
	const [userData, setUserData] = useState({
		userName: "",
		password: "",
	});

	const [errors, setErrors] = useState({
		userName: "",
		password: "",
	});

	const handleInputChange = (event) => {
		const property = event.target.name;
		const value = event.target.value;

		setUserData({
			...userData,
			[property]: value,
		});
		validation({ ...userData, [property]: value }, errors, setErrors);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		login(userData);
	};

	return (
		<div className={style.formContainer}>
			<div className={style.form}>
			<img className={style.img} src={rick} alt="" />
			<form onSubmit={handleSubmit}>
				<label htmlFor="userName">Username: </label>
				<br />
				<input
					type="text"
					name="userName"
					value={userData.userName}
					onChange={handleInputChange}
					placeholder="nicoflorentin@mail.com"
				/>
				<p>{errors.userName}</p>
				<label htmlFor="password">Password: </label>
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
