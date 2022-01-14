const User = require("../models/User")
const bcrypt = require("bcryptjs")
const {generateAccessToken} = require("../middleware/authMiddleware")

module.exports.login = async (req, res) => {
    try {
        const {username, password, rememberMe} = req.body
        const user = await User.findOne({username})
        if (!user) {
            return res.status(400).json({massage: `User ${username} not found`})
        }
        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(400).json({massage: 'Wrong password entered'})
        }
        const token = generateAccessToken(user._id)
        res.cookie('token', token, {
            path: '/',
            expires: rememberMe ? new Date(new Date().getTime() + 24 * 60 * 60 * 1000) : false,
        }).cookie('name', user.username, {
            path: '/',
            expires: rememberMe ? new Date(new Date().getTime() + 24 * 60 * 60 * 1000) : false,
        }).send()
    } catch (e) {
        res.send(e)
    }
}

module.exports.auth = async (req, res) => {
    try {
        const {id, mail} = req.body
        const userId = await User.findOne({googleId: id})
        if (!userId) {
            await User.create({googleId: id},
                (e) => {
                    if (e) return e
                })
        }
        const token = generateAccessToken(userId._id)

        res.cookie('token', token, {
            path: '/',
            expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
        }).cookie('name', mail, {
            path: '/',
            expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
        }).send()
    } catch (e) {
        console.log(e)
    }
}

module.exports.registration = async (req, res, next) => {
    try {
        const {username, password} = req.body

            if (await User.findOne({username})) {
                return res.status(400).json({message: 'This user already exists'})
            }
        const hashPassword = bcrypt.hashSync(password, 7)
        await User.create({username, password: hashPassword},
            (e) => {
                if (e) return e
                next()
            })
    } catch (e) {
        res.send(e)
    }
}