import express from 'express';
import authJWT from '../../middleware/authJWT.js'
import {
    premiumImageController
} from '../../controllers/PremiumImageController.js'

const premiumImage = express.Router();

premiumImage.get('/', [authJWT.verifyToken], premiumImageController);

export default premiumImage;