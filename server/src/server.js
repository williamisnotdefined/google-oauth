import express from "express";
import cors from "cors";

// import routes from "./routes";

class Server {
	constructor() {
		this.express = express();

		this.middlewares();
		this.routes();
	}

	middlewares () {
		this.express.use(cors());
		this.express.use(express.json());
	}

	routes () {
		// this.express.use(require('./routes'));
		// this.express.use(routes);
	}
}

module.exports = new Server().express