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

const URL_API = "https://rickandmortyapi.com/api";
const API_KEY = "12c293d7c01b.1fdc47930d06d48e2f63";
const URL_LOCAL_API = 'http://localhost:3001/rickandmorty'
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

	//manda una request con un id a la base de datos y setea ese personaje en el estado
	const onSearch = (characterID) => {
		fetch(`${URL_API}/character/${characterID}?key=${API_KEY}`)
			.then((response) => response.json())
			.then((data) => {
				if (
					data.name &&
					!characters.find((char) => data.id === char.id)
				) {
					setCharacters((oldChars) => [...oldChars, data]);
				} else {
					window.alert("error");
				}
			});
	};

	//lo mismo pero lo trae de mi backend
	const onSearchServer = (characterID) => {
		fetch(`${URL_LOCAL_API}/onsearch/${characterID}`)
			.then((res) => res.json())
			.then((data) => {
					if (data.name && !characters.find((char) => data.id === char.id)) {
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
		setAccess(false)
		navigate("/")
	}

	return (
		<>
			<div className={`${styles.App}`}>
				{/* el nav solo se renderiza cuando no se esta renderizando el login */}
				{pathname !== "/" && (
					<Nav onSearch={onSearch} onSearchServer={onSearchServer} logout={logout}/>
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
					<Route path="/favorites" element={<Favorites />}/>
					<Route path="/detail/:id" element={<Detail />} />
					{/* cuando se ingrese una ruta que no esta en el enrutador entonces renderiza el componente error */}
					<Route path="*" element={<Error />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
