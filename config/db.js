import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config()

const db = new Sequelize(
    process.env.SERVER_MYSQL_DB,
    process.env.SERVER_MYSQL_USER,
    process.env.SERVER_MYSQL_PASSWORD,
    {
        host: process.env.SERVER_MYSQL_HOST,
        dialect: "mysql"
    }
)

export default db;
