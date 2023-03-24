import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchBarServer from "../SearchBarServer/SearchBarServer";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";
const Nav = ({ onSearch, onSearchServer }) => {
	return (
		<>
			<div className={style.nav}>
        <div className={style.navLinksContainer}>
				<NavLink className={style.navLinks} to="/home">
					Home
				</NavLink>
				<NavLink className={style.navLinks} to="/about">
					About
				</NavLink>
        </div>
				<SearchBarServer onSearchServer={onSearchServer}/>
				<SearchBar onSearch={onSearch} />
			</div>
		</>
	);
};

export default Nav;