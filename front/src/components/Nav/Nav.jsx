import React from "react";
// import SearchBarServer from "../SearchBarServer/SearchBarServer";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";
const Nav = ({ onSearch, onSearchServer, logout }) => {
	return (
		<>
			<div className={style.nav}>
				<div className={style.navLinksContainer}>
					<NavLink className={style.navLinks} to="/home">
						Home
					</NavLink>
					<NavLink
						className={`${style.navLinks} ${style.favLink}`}
						to="/favorites"
					>
						Favorites
					</NavLink>
					<NavLink className={style.navLinks} to="/about">
						About
					</NavLink>
				</div>
				{/* <SearchBarServer onSearchServer={onSearchServer} /> */}
				<SearchBar onSearch={onSearch} />
				<button
					onClick={logout}
					className={`${style.navLinks} ${style.logoutBtn}`}
				>
					Logout
				</button>
			</div>
		</>
	);
};

export default Nav;
