import { Sequelize } from "sequelize";
import db from '../config/db.js';

const { DataTypes } = Sequelize;

const User = db.define('users', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    }
},
    {
        freezeTableName: true,
        timestamps: false
    });

export default User;