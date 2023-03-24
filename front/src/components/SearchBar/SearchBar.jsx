import { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
	const [id, setId] = useState();

	const handleChange = (event) => {
		setId(event.target.value);
	};
	return (
		<>
			<div className={styles.searchBar}>
				<input type="search" onChange={handleChange} placeholder='1 to 826 ID' />
				<button
					className={styles.searchButton}
					onClick={() => {
						onSearch(id);
					}}
				>
					ADD
				</button>
				<button
					className={styles.randomButton}
					onClick={() => {
						onSearch(Math.floor(Math.random() * 825 + 1));
					}}
				>
					RANDOM
				</button>
			</div>
		</>
	);
};

export default SearchBar;
