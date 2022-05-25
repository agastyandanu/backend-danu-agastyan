import User from "../models/UserModel.js";
import GenerateToken from "../controllers/helper/generateToken.js";

export const login_user_service = async (req, res) => {
    try {
        return User.findOne({ where: { email: req.email } })
            .then((results) => {
                if (results === null) {
                    return ({ status: 204, message: "Email Not Found" });
                } else if (req.password !== results.password) {
                    return ({ status: 204, message: "Password Is Not Correct" });
                } else {
                    return GenerateToken(results);
                }
            })
    } catch (error) {
        return error
    }
}

export const get_all_user_service = async (req, res) => {
    try {
        return await User.findAll()
            .then((result) => {
                return ({ status: 200, data: result })
            });
    } catch (error) {
        return error
    }
}