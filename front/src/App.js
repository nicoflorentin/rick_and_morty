import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Error from "./components/Error/Error";

const URL_MYBACK = "http://localhost:3001";
const URL_API = "https://rickandmortyapi.com/api";
const API_KEY = "12c293d7c01b.1fdc47930d06d48e2f63";
const App = () => {
	const [characters, setCharacters] = useState([]);
	const [access, setAccess] = useState(false);
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const userName = "nicoflorentin@mail.com";
	const password = "pass123";

	useEffect(() => {
		!access && navigate("/");
	}, []);

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

	const onSearchServer = (characterID) => {
		fetch(`http://localhost:3001/rickandmorty/character/${characterID}`)
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

	const onClose = (id) => {
		setCharacters(characters.filter((char) => char.id !== id));
	};

	const login = (userData) => {
		if (userData.userName === userName && userData.password === password) {
			setAccess(true);
			navigate("/home");
		} else {
			alert("login incorrecto");
		}
	};

	return (
		<>
			<div className={`${styles.App}`}>
				{pathname !== "/" && (
					<Nav onSearch={onSearch} onSearchServer={onSearchServer} />
				)}
				<Routes>
					<Route path="/" element={<Form login={login} />} />
					<Route path="/about" element={<About />} />
					<Route
						path="/home"
						element={
							<Cards characters={characters} onClose={onClose} />
						}
					/>
					<Route path="/detail/:id" element={<Detail />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
