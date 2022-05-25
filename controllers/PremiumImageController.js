import {
    get_all_premium_image_service
} from "../services/PremiumImage.js"

export const premiumImageController = async (req, res) => {
    const result = await get_all_premium_image_service(req, res)
    return res.json({
        data: result
    });
}