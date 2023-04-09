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
				<input type="search" onChange={handleChange} placeholder='1-826 id to server! 🚀' />
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
						onSearchServer(Math.floor(Math.random() * 825 + 1));
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
