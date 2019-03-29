import express from "express";
import cors from "cors";
import passport from "passport";

import routes from "./routes";
import passportConfig from "./passport";

class Server {
	constructor() {
		this.express = express();

		this.middlewares();
		this.routes();
	}

	middlewares () {
		this.express.use(cors());
		this.express.use(express.json());
		this.express.use(passport.initialize());
		passportConfig()
	}

	routes () {
		this.express.use(routes);
	}
}

const expressServer = new Server().express;
export default expressServer;