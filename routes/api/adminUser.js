const express = require('express');
const router = express.Router();
const AdminUser = require('../../models/AdminUser')
const bcrypt = require('bcryptjs')
const config = require('config');
const jwtToken = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');


// @route POST api/users
// @desc USers register
// @access public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password should be greater than 6 letters').isLength({ min: 7 })
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { name, email, password } = req.body;
    try {
        let user = await AdminUser.findOne({ email });
        if (user) {
            return res.status(400).json({ errors: [{ msg: "User already exists!" }] })
        }
        user = new AdminUser({
            name,
            email,
            password
        })
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        const payload = {
            user: {
                id: user.id
            }
        }
        jwtToken.sign(
            payload,
            config.get('jwtSecret'),
            { expiresIn: 3600 },
            (err, token) => {
                if (err) throw err;

                res.send({ token });
            }
        );
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;