const mongoose = require("mongoose")
require('dotenv').config()

try {
    const server = require("./connectionBD")

    setTimeout(() => server.close(() => {
        mongoose.connection.close(false, () => {
            console.log('Сервер отключен');
            process.exit(0);
        });
    }), 3600000)
} catch (e) {
    mongoose.connection.close(false, () => {
        console.log('Сервер отключен из-за ошибки');
        console.log(e)
        process.exit(0);
    });
}
