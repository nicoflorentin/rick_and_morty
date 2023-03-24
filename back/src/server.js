const data = require("./utils/data");
const http = require("http");

http.createServer((req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	const { url } = req;
	console.log('URL : ', url)

	if (url.includes('/rickandmorty/character')) {
		const id = url.split('/').at(-1)
		const character = data.find((character) => character.id == id)
		if(character) {
			console.log(character)
			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(JSON.stringify(character));
		} else {
			res.writeHead(400, { "Content-Type": "application/json" });
			res.end(JSON.stringify('no character'));
		}
	}
}).listen(3001, "localhost");
