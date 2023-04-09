const { Router } = require("express");
let favs = require("../utils/favs");
const getCharById = require("../controllers/getCharById");
const getDetailById = require("../controllers/getDetailById");

const router = Router()

router.get("/test/", (req, res) => {
	const {query} = req.query
	console.log(query)
	res.send('router andando')
});

router.post('/rickandmorty/test/post', (req, res) => {
	const data = req.body
	res.status(200).json(data)
})

router.get("/rickandmorty/onsearch/:id", getCharById);
router.get("/rickandmorty/detail/:id", getDetailById);

router.get("/rickandmorty/fav", (req, res) => {
	res.status(200).json(favs);
});

router.post("/rickandmorty/fav", (req, res) => {
	const character = req.body;
	favs.push(character);
	res.status(200).json(character);
});

router.delete("/rickandmorty/delete/:id", (req, res) => {
	let { id } = req.params;
	favs = favs.filter((char) => char.id != id);
	res.status(200).json({ status: "ok", deleted: id});
});

module.exports = router;
