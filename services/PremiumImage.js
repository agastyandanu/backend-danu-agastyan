import PremiumImage from "../models/PremiumImageModel.js";

export const get_all_premium_image_service = async (req, res) => {
    try {
        return await PremiumImage.findAll()
            .then((result) => {
                return ({ status: 200, data: result })
            });
    } catch (error) {
        return error
    }
}