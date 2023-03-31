const validation = (form, errors, setErrors) => {
	//username handler
	if (!form.userName) {
		setErrors({ ...errors, userName: 'Campo usuario vacío' });
	} else if (form.userName.length > 35) {
		setErrors({ ...errors, userName: "Máximo 35 carácteres" });
		alert('se pasó')
	}
	//  else if (
	// 	!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.userName)
	// ) {
	// 	setErrors({ ...errors, userName: "Email inválido" });
	// } 
	else {
		setErrors({ ...errors, userName: "" });
	}

	//password handler
	if (form.password.length < 6 || form.password.length > 10) {
		setErrors({
			...errors,
			password: "Contraseña entre 6 y 10 carácteres",
		});
	} else if (!/\d/.test(form.password)) {
		setErrors({ ...errors, password: "Debe contener al menos un número" });
	} else {
		setErrors({ ...errors, password: "" });
	}
};

export default validation;
