import { readdirSync } from "fs";
import path from "path";
import Sequelize from "sequelize";
import { config as _config } from "dotenv";
_config();

const basename = path.basename(__filename)
import config from '../config/db';
const db = {}

const sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	config
);

readdirSync(__dirname)
.filter(file => {
	return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
})
.forEach(file => {
	console.log('file??? ', file);
	const model = sequelize['import'](path.join(__dirname, file))
	console.log('model: ', model)
	db[model.name] = model
})

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db)
	}
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
