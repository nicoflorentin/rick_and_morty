import Card from "../Card/Card";
import style from './Cards.module.css'

const Cards = ({ characters, onClose }) => {
	return (
		<div className={style.cards}>
			{characters.map((character) => (
				<Card
					key={character.id}
					name={character.name}
					species={character.species}
					gender={character.gender}
					image={character.image}
					id={character.id}
					onClose={onClose}
				/>
			))}
		</div>
	);
};

export default Cards