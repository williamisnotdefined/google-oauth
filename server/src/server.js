import express from "express";
import cors from "cors";

import routes from "./routes";
import passportMiddleware from "./passport";

class Server {
	constructor() {
		this.express = express();

		this.middlewares();
		this.routes();
	}

	middlewares () {
		this.express.use(cors());
		this.express.use(express.json());
		passportMiddleware();
	}

	routes () {
		this.express.use(routes);
	}
}

const expressServer = new Server().express;
export default expressServer;