import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Favorites from "./components/Favorites/Favorites";
import Form from "./components/Form/Form";
import Error from "./components/Error/Error";

const URL_LOCAL_API = "http://localhost:3001/rickandmorty";
const App = () => {
	//estado con todos los personajes traidos del back end
	const [characters, setCharacters] = useState([]);
	//estado con el booleano de acceso que te otorga el login
	const [access, setAccess] = useState(false);
	//hook para navegar a una ruta sin usar navlink o link
	const navigate = useNavigate();
	//hook para obtener el parametro marcado por ' : ' en la URL
	const { pathname } = useLocation();

	const userName = "nicoflorentin@mail.com";
	const password = "pass123";

	//si no hay acceso nunca va a navegar al /home
	useEffect(() => {
		!access && navigate("/");
	}, []);

	//lo mismo pero lo trae de mi backend
	const onSearchServer = (characterID) => {
		fetch(`${URL_LOCAL_API}/onsearch/${characterID}`)
			.then((res) => res.json())
			.then((data) => {
				if (
					data.name &&
					!characters.find((char) => data.id === char.id)
				) {
					// si pongo un argumento dentro de la callback del setState, éste recibe el estado actual
					setCharacters((oldChars) => [...oldChars, data]);
				} else {
					window.alert("error");
				}
			});
	};

	//busca los personajes que no tienen el id pasado y pisa el estado con esos personajes
	const onClose = (id) => {
		setCharacters(characters.filter((char) => char.id !== id));
		
	};

	//login handler, se pasa por props hasta el formulario
	const login = (userData) => {
		if (userData.userName === userName && userData.password === password) {
			setAccess(true);
			navigate("/home");
		} else {
			alert("login incorrecto");
		}
	};

	const logout = () => {
		setAccess(false);
		navigate("/");
	};

	// const testFetchPost = () => {
	// 	const data = {
	// 		nombre: "Nicolas",
	// 		apellido: "Florentin",
	// 	};

	// 	axios
	// 		.post("http://localhost:3001/rickandmorty/test/post", data)
	// 		.then((response) => {
	// 			console.log("Respuesta del servidor:", response.data);
	// 		})
	// 		.catch((error) => {
	// 			console.error("Error al enviar la solicitud:", error);
	// 		});
	// }; ${styles.crt}

	return (
		<>
			<div className={`${styles.App}`}>
				{/* el nav solo se renderiza cuando no se esta renderizando el login */}
				{pathname !== "/" && (
					<Nav
						onSearchServer={onSearchServer}
						logout={logout}
					/>
				)}
				<Routes>
					<Route path="/" element={<Form login={login} />} />
					<Route
						path="/home"
						element={
							<Cards characters={characters} onClose={onClose} />
						}
					/>
					<Route path="/about" element={<About />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="/detail/:id" element={<Detail />} />
					{/* cuando se ingrese una ruta que no esta en el enrutador entonces renderiza el componente error */}
					<Route path="*" element={<Error />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
