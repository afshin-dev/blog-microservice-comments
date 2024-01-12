import express from "express";
import { HOST, PORT } from "./cfg/server.js";
import Comments from "./routes/comments.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/comments", Comments);

app.listen(PORT, HOST, () => {
  console.info(`listen on http://${HOST}:${PORT}`);
});
