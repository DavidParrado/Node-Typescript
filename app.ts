import dotenv from 'dotenv';
dotenv.config()

import { Server } from "./classes/server";

const server: Server = new Server();
server.listen();


