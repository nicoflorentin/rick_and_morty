const URL_API = "http://rickandmortyapi.com/api";
const API_KEY = "12c293d7c01b.1fdc47930d06d48e2f63";

const getDetailById = (req, res) => {
	try {
		const { id } = req.params;
		fetch(`${URL_API}/character/${id}?key=${API_KEY}`)
			.then((response) => response.json())
			.then((response) => {
				const { id, name, species, image, gender, origin } = response;
				res.status(200).json({ id, name, species, image, gender, origin });
			});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = getDetailById;
