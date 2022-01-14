const jwt = require("jsonwebtoken")

const secret = process.env.DB_SECRET_CODE

module.exports.checkToken = async (req, res, next) => {
    try {
        jwt.verify(req.headers.authorization.split('=')[1], secret)
        next()
    } catch (e) {
        res.send(false)
    }
}

module.exports.generateAccessToken = (id) => {
    const payload = {id}
    return jwt.sign(payload, secret, {expiresIn: "24h"})
}