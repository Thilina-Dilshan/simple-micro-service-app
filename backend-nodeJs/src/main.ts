import express from 'express';
import {router as StudentHttpController} from "./api/StudentHttpController";

let app = express();

app.use("/api/v1/students", StudentHttpController);
app.listen(8081, () => console.log("Server started from 8081"));


