const express = require('express');
const Student = require('../../models/student');
const Drive = require('../../models/Drive')
const router = express.Router();
const auth = require('../../middleware/auth')


// @route GET api/filter/get-branch
// @desc get branch name
// @access private
router.get('/get-branch', auth, async (req, res) => {
    try {
        const branch = await Student.find().distinct('Branch');
        const body = branch.map((label) => ({ label, value: label }));

        res.json([...body])


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error")
    }
})

// @route GET api/filter/get-college
// @desc get college name
// @access private
router.get('/get-college', auth, async (req, res) => {
    try {
        const college = await Student.find().distinct('College');
        const body = college.map((label) => ({ label, value: label }))
        res.json(body);
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
        let body = drive.map((_id) => ({ _id: _id._id, label: _id.companyName, value: _id.companyName }))
        res.json(body)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
})


module.exports = router;