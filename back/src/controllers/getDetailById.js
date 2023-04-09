const URL_API = process.env.URL_API
const API_KEY = process.env.API_KEY

const getDetailById = async (req, res) => {
	try {
		const { id } = req.params;
		await fetch(`${URL_API}/character/${id}?key=${API_KEY}`)
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
