import express from 'express';
import authJWT from '../../middleware/authJWT.js'
import {
    userController
} from '../../controllers/UserController.js'

const user = express.Router();

user.get('/', [authJWT.verifyToken], userController);

export default user;