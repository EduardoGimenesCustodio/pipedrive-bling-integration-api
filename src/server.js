require("dotenv/config");
const express = require("express");
const db = require("./database/config");
const mongoose = require("mongoose");
const routes = require("./routes");

class App {
	constructor() {
		this.express = express();

		this.database();
		this.middlewares();
		this.routes();

		this.express.listen(process.env.PORT, () =>
			console.log(`API REST rodando na porta ${process.env.PORT}`)
		);
	}

	database() {
		mongoose.connect(db.uri, { useNewUrlParser: true });
	}

	middlewares() {
		this.express.use(express.json());
	}

	routes() {
		this.express.use(routes);
	}
}

module.exports = new App().express;
