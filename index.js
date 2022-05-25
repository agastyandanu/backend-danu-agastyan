import express from 'express';
import dotenv from 'dotenv';
import db from './config/db.js';
import cors from 'cors';
import http from 'http'
import {
    Login,
    User,
    FreeImage,
    PremiumImage
} from './routes/index.js';

dotenv.config()

const app = express();
const port = process.env.SERVER_PORT;

try {
    await db.authenticate();
    console.log("Database Connected");
} catch (error) {
    console.log("Database Not Connected, " + error);
}


app.use(cors());
app.use(express.json()); //middleware express json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ credentials: true, origin: '*' }))
// app.listen(port, () => console.log("Server Running At PORT", + port));

const httpServer = http.createServer(app)
httpServer.listen(process.env.SERVER_PORT, () =>
    console.log(`Server running on port ${process.env.SERVER_PORT}`)
)

app.use('/test', function (req, res) {
    return res.json({ status: 'Routing test successfully loaded' })
})
app.use('/api/login', Login)
app.use('/api/user', User)
app.use('/api/public', FreeImage)
app.use('/api/private', PremiumImage)