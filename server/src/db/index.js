import mongoose from "mongoose";
import { readdirSync } from "fs";
import path from "path";

mongoose.connect('mongodb://localhost:27017/google-oauth', { useNewUrlParser: true });

const pathModels = path.join(__dirname, "../models");

readdirSync(pathModels)
.forEach(file => {
	require(path.join(pathModels, file));
});

export default mongoose;