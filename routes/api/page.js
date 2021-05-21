const express = require('express');
const Student = require('../../models/student');
const router = express.Router();
const auth = require('../../middleware/auth')


router.post('/', auth, async (req, res) => {

    const search = {};
    var ipp = null;
    var pageNo = null;

    if (req.body.college) search.College = req.body.college;
    if (req.body.branch) search.Branch = req.body.branch;
    if (req.body.placedIn) search.placedIn = req.body.placedIn;
    if (req.body.unPlaced === Boolean) search.isPlaced = req.body.unPlaced;
    if (req.body.ipp) ipp = parseInt(req.body.ipp);
    else ipp = 10;
    if (req.body.pageNo) pageNo = parseInt(req.body.pageNo);
    else pageNo = 1;

    if (req.body.filtertype) {
        const _filtertype = req.body.filtertype.split(',');
        if (_filtertype[0]) search.Enrollment_No = _filtertype[0].trim();
        if (_filtertype[1]) search.Student_Name = _filtertype[1].trim();
        if (_filtertype[2]) search.Email_Address = _filtertype[2].trim();
    }

    try {
        const totalItems = await Student.count(search);
        const page = await Student.find(search).skip((pageNo * ipp) - ipp).limit(ipp).populate({ path: 'placedIn', model: 'drive' });

        //const page = await Student.find(search).skip(0).limit(5);
        res.json([page, { "page": pageNo, "totalPage": Math.ceil(totalItems / ipp), "Result Found": totalItems }]);
    } catch (error) {
        res.json({ error });
    }
});

module.exports = router;