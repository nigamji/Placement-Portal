const express = require('express');
const router = express.Router();
const Drive = require('../../models/Drive')
const Student = require('../../models/student')
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth')
const nodemailer = require('nodemailer')
const { google } = require('googleapis')



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
    const CLIENT_ID = '192702518709-t4d567c9j45lte47eovtlj8ucs74uhus.apps.googleusercontent.com'
    const CLIENT_SECRET = 'V4vbq4_-jGkIWc4EpFRuax_L'
    const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
    const REFRESH_TOKEN = '1//043Er0fRBXQfeCgYIARAAGAQSNwF-L9IrulBNai3MFDUNvKfW7VROYxehKO_kjYuagyQ6zGvAMDSGTmv2gzWaS2PTXpBNX3U5xdY'
    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'aryannigam18@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })
        const outputBody = `
        <h1>New Drive Announcemt</h1>
        <h3>Drive details</h3>
        <hr/>
        <ul>
            <li>Company: ${companyName}</li>
            <li>Package: ${package}</li>
            <li>Branches: ${branch}</li>
            <li>Description: ${desc}</li>
        </ul>
        `
        const mailOptions = {
            from: 'Aryan <aryannigam18@gmail.com>',
            to: 'aryannigamofficial@gmail.com, anamika.atiwari01@gmail.com',
            subject: 'New Drive Announcement',
            text: outputBody,
            html: outputBody
        }
        const result = await transport.sendMail(mailOptions);
        res.json(result)

    } catch (error) {
        console.log(error.message)
    }
})

// @route GET api/drive/
// @desc Get all Drives
// @access private
router.get('/', auth, async (req, res) => {
    try {
        const drives = await Drive.find();
        res.json(drives)

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error')
    }
})


// @route Get api/drive/:id
// @desc get drive by id
// @access private
router.get('/:id', auth, async (req, res) => {
    try {
        let drive = await Drive.findById(req.params.id)
        res.json(drive)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
    }

})
// @route POST api/drive/drive-placed-student/:id
// @desc Add placed student enroll in particular drive
// @access private
router.post('/drive-placed-student/:id', auth, async (req, res) => {
    try {
        // const drive = await Drive.findById(req.params.id);
        const { enrollmentNo } = req.body;
        let number = null
        if (enrollmentNo) number = enrollmentNo.split(',').map(number => number.trim())
        number.forEach(async element => {
            try {
                const placedIn = await Student.find({ Enrollment_No: element }).select('placedIn');
                console.log("1st " + placedIn)
                let main = placedIn
                console.log(main)
                const student = await Student.findOneAndUpdate(
                    { Enrollment_No: element },
                    { $set: { "placedIn": main, isPlaced: true } },
                    { new: true }
                )
                res.json(student)
            } catch (error) {
                console.error(error.message);
            }
        });
        res.send("hua");
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
    }
})
module.exports = router;