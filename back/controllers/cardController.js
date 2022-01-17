const Card = require("../models/Card")
const jwt = require("jsonwebtoken");

const secret = process.env.DB_SECRET_CODE

module.exports.getCard = async (req, res, next) => {
    const id = jwt.verify(req.headers.authorization.split("=")[1], secret).id
    res.send(await Card.find({user_id: id}))
}

module.exports.changeCard = async (req, res) => {
    try {
        const pokemon = req.body.pokemon
        const id = jwt.verify(req.headers.authorization.split("=")[1], secret).id

        if (await Card.findOne({user_id: id, id: pokemon.id}) !== null) {
            await Card.findOneAndDelete({user_id: id, id: pokemon.id})
            res.send("delete success")
        } else {
            await Card.create({
                id: pokemon.id,
                name: pokemon.name,
                pic: pokemon.pic,
                types: pokemon.types,
                user_id: id
            }, (e, newTask) => {
                if (e) return e
                res.send({data: newTask})
            })
        }
    } catch (e) {
        res.send(false)
    }
}
