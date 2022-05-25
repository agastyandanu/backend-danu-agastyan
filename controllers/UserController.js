import {
    get_all_user_service
} from "../services/User.js"

export const userController = async (req, res) => {
    const result = await get_all_user_service(req, res)
    return res.json({
        data: result
    });
}