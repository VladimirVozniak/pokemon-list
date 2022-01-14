const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const path = require("path")
const cookieParser = require("cookie-parser")
const app = express()
require('dotenv').config()

try {
    const PORT = process.env.DB_PORT || 3002
    const URL = process.env.DB_URL

    const apiRoutes = require("./routes")

    app.use(express.static(path.join(__dirname, 'app')));
    app.use(bodyParser.json())
    app.use('/api', apiRoutes)
    app.use(cookieParser())
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'app', 'index.html'));
    });

    mongoose.connect(URL)

    module.exports = app.listen(PORT, () => {
        console.log('Сервер был подключен')
    })
} catch (e) {
    mongoose.connection.close(false, () => {
        console.log('Сервер отключен из-за ошибки');
        console.log(e)
        process.exit(0);
    });
}