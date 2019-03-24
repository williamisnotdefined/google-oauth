import { config } from "dotenv";
config = config();

import server from "./server";
server.listen(process.env.PORT);
