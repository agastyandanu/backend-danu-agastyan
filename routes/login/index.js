import express from 'express';
import authJWT from '../../middleware/authJWT.js'
import {
    loginUser
} from '../../controllers/LoginController.js'

const login = express.Router();

login.post('/', loginUser);

export default login;