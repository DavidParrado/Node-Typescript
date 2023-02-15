import dotenv from 'dotenv';
dotenv.config()

import { Server } from "./classes/server";

const server = new Server();
server.listen();


