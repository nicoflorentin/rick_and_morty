import { useState } from "react";
import styles from "./SearchBarServer.module.css";

const SearchBarServer = ({ onSearchServer }) => {
	const [id, setId] = useState('');

	const handleChange = (event) => {
		setId(event.target.value);
	};
	return (
		<>
			<div className={styles.searchBar}>
				<input type="search" onChange={handleChange} placeholder='from my server' />
				<button
					className={styles.searchButton}
					onClick={() => {
						onSearchServer(id);
						setId('')
					}}
				>
					ADD
				</button>
				<button
					className={styles.randomButton}
					onClick={() => {
						onSearchServer(Math.floor(Math.random() * 4 + 1));
						setId('')
					}}
				>
					RANDOM
				</button>
			</div>
		</>
	);
};

export default SearchBarServer;
