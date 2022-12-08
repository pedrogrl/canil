import express from "express";
import dotenv from "dotenv";
import path from "path";

import mainRoutes from './routes/index'

dotenv.config();

const server = express();

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

server.use(express.static("public"));

server.use('/', mainRoutes)

server.use((req, res) => {
   res.send('Page not found!')
})

server.listen(process.env.PORT);
