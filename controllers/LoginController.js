import User from "../models/UserModel.js";
import {
    login_user_service
} from "../services/User.js"

export const loginUser = async (req, res) => {
    const result = await login_user_service(req.body, res)
    return res.json({
        data: result
    });
}