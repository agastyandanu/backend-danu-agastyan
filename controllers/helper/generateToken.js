import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const GenerateToken = (data) => {
    const jwt_token = new Promise((resolve, reject) => {
        jwt.sign(
            {
                id: data.id,
                email: data.email,
                password: data.password
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '7d'
            },
            (err, token) => {
                if (err) reject(err)

                resolve(
                    {
                        status: 200,
                        id: data.id,
                        email: data.email,
                        token: token
                    }
                )
            }
        );
    });
    return jwt_token;
}

export default GenerateToken;