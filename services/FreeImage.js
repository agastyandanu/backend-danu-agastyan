import FreeImage from "../models/FreeImageModel.js";

export const get_all_free_image_service = async (req, res) => {
    try {
        return await FreeImage.findAll()
            .then((result) => {
                return ({ status: 200, data: result })
            });
    } catch (error) {
        return error
    }
}