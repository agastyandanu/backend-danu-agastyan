import {
    get_all_free_image_service
} from "../services/FreeImage.js"

export const freeImageController = async (req, res) => {
    const result = await get_all_free_image_service(req, res)
    return res.json({
        data: result
    });
}