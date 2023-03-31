import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from '../src/redux/store'

ReactDOM.render(
	//el provider envuelve toda la aplicacion con el estado global
	<Provider store={store}>
		{/* browserRouter envuelve a toda la aplicacion con las rutas */}
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
