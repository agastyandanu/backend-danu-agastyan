import express from 'express'
import {
    freeImageController
} from '../../controllers/FreeImageController.js'

const freeImage = express.Router();

freeImage.get('/', freeImageController);

export default freeImage;