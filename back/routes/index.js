const express = require("express");
const router = express.Router();
const {checkToken} = require("../middleware/authMiddleware")
const {
    getCard,
    changeCard
} = require("../controllers/cardController");
const {
    login,
    auth,
    registration,
} = require("../controllers/userController")

router.post('/checkToken', checkToken)

// Card routes
router.post('/getCard', checkToken, getCard)
router.post('/changeCard', checkToken, changeCard);

//User routes
router.post('/login', login)
router.post('/auth', auth)
router.post('/newUser', registration, login)

module.exports = router;