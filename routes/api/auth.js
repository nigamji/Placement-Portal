const express = require('express');
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const jwtToken = require('jsonwebtoken')
const config = require('config')
const User = require('../../models/AdminUser');
const router = express.Router();
const auth = require('../../middleware/auth');
// @route POST api/
// @desc Admin login
// @access public
router.post('/', [
    check('email', 'Enter valid email').isEmail(),
    check('password', 'Enter Password').exists()
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ errors: [{ msg: "Invalid Credentials!" }] })
        }
        let isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(401).json({ errors: [{ msg: "Invalid Credentials!" }] })
        }

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
        return res.status(500).send("Server error");
    }
});


// @route GET api/
// @desc get login admin details
// @access private
router.get('/', auth, async (req, res) => {
    try {
        let user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        console.error(error);
        res.json(500).send('Server Error')
    }
})
module.exports = router;