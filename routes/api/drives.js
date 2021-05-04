const express = require('express');
const router = express.Router();
const Drive = require('../../models/Drive')
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth')

// @route POST api/drive/new-drive
// @desc create a new Drive
// @access private
router.post('/new-drive', [auth, [
    check('companyName', 'Company is required').not().isEmpty(),
    check('branch', 'Branch is required').not().isEmpty(),
    check('course', 'Course is required').not().isEmpty()]
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ err: errors.array() })
    }
    const {
        companyName,
        dateOfDrive,
        package,
        branch,
        course,
        desc,
        ssc,
        hsc,
        diploma,
        graduation,
        belowPackage,
        placedIn
    } = req.body
    let driveFields = {};
    driveFields.admin = req.user.id;
    if (companyName) driveFields.companyName = companyName;
    if (package) driveFields.package = package;
    if (branch) driveFields.branch = branch.split(',').map(branch => branch.trim());
    if (course) driveFields.course = course.split(',').map(course => course.trim());
    if (desc) driveFields.desc = desc;
    if (dateOfDrive) driveFields.dateOfDrive = dateOfDrive;
    driveFields.eligibility = {};
    if (ssc) driveFields.eligibility.ssc = ssc;
    if (hsc) driveFields.eligibility.hsc = hsc;
    if (diploma) driveFields.eligibility.diploma = diploma;
    if (graduation) driveFields.eligibility.graduation = graduation;
    driveFields.notEligible = {};
    if (belowPackage) driveFields.notEligible.belowPackage = belowPackage;
    if (placedIn) driveFields.notEligible.placedIn = placedIn.split(',').map(placedId => placedId.trim());
    try {
        let drive = new Drive(driveFields);
        await drive.save();
        res.json(drive);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
})

module.exports = router;