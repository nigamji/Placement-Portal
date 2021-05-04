const express = require('express');
const student = require('../../models/student');
const Drive = require('../../models/Drive')
const router = express.Router();
const auth = require('../../middleware/auth')
// @route GET api/filter/get-branch
// @desc get branch name
// @access private
router.get('/get-branch', auth, async (req, res) => {
    try {
        const branch = await student.find().distinct('Branch');
        res.json(branch);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error")
    }
})
// @route GET api/filter/drive-id
// @desc get drive name and id for filter
// @access private
router.get('/drive-id', auth, async (req, res) => {
    try {
        let drive = await Drive.find().select('_id, companyName');
        res.json(drive)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
})


module.exports = router;