const express = require('express');
const router = express.Router();
// const Drive = require('../../models/Drive')
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth')

const Student = require('../../models/student');
// @route GET api/student/
// @desc Test
// @access public
router.get('/', async (req, res) => {
    try {
        let student = await Student.find();
        res.json(student)
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message);
    }

})
// @route Post api/student/add-new
// @desc Add new Student
// @access private
router.post('/add-new', [auth,
    check('Email_Address', "Email is required").not().isEmpty(),
    check('Student_Name', 'Student Name is required').not().isEmpty(),
    check('Enrollment_No', "Enrollment number is required").not().isEmpty(),
    check('College', "College is required").not().isEmpty(),
    check('Branch', 'Branch is required').not().isEmpty(),
    check('Gender', 'Gender is required').not().isEmpty(),
    check('DOB', 'DOB is required').not().isEmpty(),
    check('Contact_Number', 'contact number is required').not().isEmpty(),
    check('Father_Name', 'Father Name is required').not().isEmpty(),
    check('Mother_Name', 'Mother Name is required').not().isEmpty(),
    check('Permanent_Address', 'Permanent Address is required').not().isEmpty(),
    check('Class_10th_per', '10th percent is required').not().isEmpty(),
    check('Year_of_Passing_10th', 'year of passing 10th is required').not().isEmpty(),
    check('_10th_Board', '10th board name is required').not().isEmpty(),
    check('Class_12th_per', '12th percent is required').not().isEmpty(),
    check('Year_of_Passing_12th', 'year of passing 12th is required').not().isEmpty(),
    check('_12th_Board', '12th board name is required').not().isEmpty(),
    check('Current_CGPA_aggregate', 'Current CGPA required').not().isEmpty(),
    check('Sem_1_SGPA', 'Sem 1 SGPA is required').not().isEmpty(),
    check('Sem_2_SGPA', 'Sem 2 SGPA is required').not().isEmpty(),
    check('Sem_3_SGPA', 'Sem 3 SGPA is required').not().isEmpty(),
    check('Sem_4_SGPA', 'Sem 4 SGPA is required').not().isEmpty(),
    check('Sem_5_SGPA', 'Sem 5 SGPA is required').not().isEmpty()
], async (req, res) => {
    const {
        Email_Address,
        Student_Name,
        Enrollment_No,
        College,
        Branch,
        Gender,
        DOB,
        Contact_Number,
        Father_Name,
        Mother_Name,
        Present_Address,
        Permanent_Address,
        Class_10th_per,
        Year_of_Passing_10th,
        _10th_Board,
        Class_12th_per,
        Year_of_Passing_12th,
        _12th_Board,
        Study_Gap,
        Current_CGPA_aggregate,
        Number_of_Backlogs,
        Sem_1_SGPA,
        Sem_2_SGPA,
        Sem_3_SGPA,
        Sem_4_SGPA,
        Sem_5_SGPA,
        isPlaced,
        placedIn
    } = req.body;
    let studentFields = {};
    if (Email_Address) studentFields.Email_Address = Email_Address;
    if (Student_Name) studentFields.Student_Name = Student_Name;
    if (Enrollment_No) studentFields.Enrollment_No = Enrollment_No;
    if (College) studentFields.College = College;
    if (Branch) studentFields.Branch = Branch;
    if (Gender) studentFields.Gender = Gender;
    if (DOB) studentFields.DOB = DOB;
    if (Contact_Number) studentFields.Contact_Number = Contact_Number;
    if (Father_Name) studentFields.Father_Name = Father_Name;
    if (Mother_Name) studentFields.Mother_Name = Mother_Name;
    if (Present_Address) studentFields.Present_Address = Present_Address;
    if (Permanent_Address) studentFields.Permanent_Address = Permanent_Address;
    if (Class_10th_per) studentFields.Class_10th_per = Class_10th_per;
    if (Year_of_Passing_10th) studentFields.Year_of_Passing_10th = Year_of_Passing_10th;
    if (_10th_Board) studentFields._10th_Board = _10th_Board;
    if (Class_12th_per) studentFields.Class_12th_per = Class_12th_per;
    if (Year_of_Passing_12th) studentFields.Year_of_Passing_12th = Year_of_Passing_12th;
    if (_12th_Board) studentFields._12th_Board = _12th_Board;
    if (Study_Gap) studentFields.Study_Gap = Study_Gap;
    if (Current_CGPA_aggregate) studentFields.Current_CGPA_aggregate = Current_CGPA_aggregate;
    if (Number_of_Backlogs) studentFields.Number_of_Backlogs = Number_of_Backlogs;
    if (Sem_1_SGPA) studentFields.Sem_1_SGPA = Sem_1_SGPA;
    if (Sem_2_SGPA) studentFields.Sem_2_SGPA = Sem_2_SGPA;
    if (Sem_3_SGPA) studentFields.Sem_3_SGPA = Sem_3_SGPA;
    if (Sem_4_SGPA) studentFields.Sem_4_SGPA = Sem_4_SGPA;
    if (Sem_5_SGPA) studentFields.Sem_5_SGPA = Sem_5_SGPA;
    if (isPlaced) studentFields.isPlaced = isPlaced;
    if (placedIn) studentFields.placedIn = placedIn.split(',').map(placed => placed.trim());
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            res.json(error.array())
        }
        let student = new Student(studentFields);
        await student.save();
        res.json(student);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
})
// @route GET api/student/:id
// @desc Get student by id
// @access private
router.get('/:id', auth, async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.json(student);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
})
// @route Post api/student/edit/:id
// @desc Edit student by id
// @access private
router.put('/edit/:id', [auth,
    check('Email_Address', "Email is required").not().isEmpty(),
    check('Student_Name', 'Student Name is required').not().isEmpty(),
    check('Enrollment_No', "Enrollment number is required").not().isEmpty(),
    check('College', "College is required").not().isEmpty(),
    check('Branch', 'Branch is required').not().isEmpty(),
    check('Gender', 'Gender is required').not().isEmpty(),
    check('DOB', 'DOB is required').not().isEmpty(),
    check('Contact_Number', 'contact number is required').not().isEmpty(),
    check('Father_Name', 'Father Name is required').not().isEmpty(),
    check('Mother_Name', 'Mother Name is required').not().isEmpty(),
    check('Permanent_Address', 'Permanent Address is required').not().isEmpty(),
    check('Class_10th_per', '10th percent is required').not().isEmpty(),
    check('Year_of_Passing_10th', 'year of passing 10th is required').not().isEmpty(),
    check('_10th_Board', '10th board name is required').not().isEmpty(),
    check('Current_CGPA_aggregate', 'Current CGPA required').not().isEmpty(),
    check('Sem_1_SGPA', 'Sem 1 SGPA is required').not().isEmpty(),
    check('Sem_2_SGPA', 'Sem 2 SGPA is required').not().isEmpty(),
    check('Sem_3_SGPA', 'Sem 3 SGPA is required').not().isEmpty(),
    check('Sem_4_SGPA', 'Sem 4 SGPA is required').not().isEmpty(),
    check('Sem_5_SGPA', 'Sem 5 SGPA is required').not().isEmpty()]
    , async (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            res.json(error.array())
        }
        const {
            Email_Address,
            Student_Name,
            Enrollment_No,
            College,
            Branch,
            Gender,
            DOB,
            Contact_Number,
            Father_Name,
            Mother_Name,
            Present_Address,
            Permanent_Address,
            Class_10th_per,
            Year_of_Passing_10th,
            _10th_Board,
            Class_12th_per,
            Year_of_Passing_12th,
            _12th_Board,
            Study_Gap,
            Current_CGPA_aggregate,
            Number_of_Backlogs,
            Sem_1_SGPA,
            Sem_2_SGPA,
            Sem_3_SGPA,
            Sem_4_SGPA,
            Sem_5_SGPA,
            isPlaced,
            placedIn
        } = req.body;
        let studentFields = {};
        if (Email_Address) studentFields.Email_Address = Email_Address;
        if (Student_Name) studentFields.Student_Name = Student_Name;
        if (Enrollment_No) studentFields.Enrollment_No = Enrollment_No;
        if (College) studentFields.College = College;
        if (Branch) studentFields.Branch = Branch;
        if (Gender) studentFields.Gender = Gender;
        if (DOB) studentFields.DOB = DOB;
        if (Contact_Number) studentFields.Contact_Number = Contact_Number;
        if (Father_Name) studentFields.Father_Name = Father_Name;
        if (Mother_Name) studentFields.Mother_Name = Mother_Name;
        if (Present_Address) studentFields.Present_Address = Present_Address;
        if (Permanent_Address) studentFields.Permanent_Address = Permanent_Address;
        if (Class_10th_per) studentFields.Class_10th_per = Class_10th_per;
        if (Year_of_Passing_10th) studentFields.Year_of_Passing_10th = Year_of_Passing_10th;
        if (_10th_Board) studentFields._10th_Board = _10th_Board;
        if (Class_12th_per) studentFields.Class_12th_per = Class_12th_per;
        if (Year_of_Passing_12th) studentFields.Year_of_Passing_12th = Year_of_Passing_12th;
        if (_12th_Board) studentFields._12th_Board = _12th_Board;
        if (Study_Gap) studentFields.Study_Gap = Study_Gap;
        if (Current_CGPA_aggregate) studentFields.Current_CGPA_aggregate = Current_CGPA_aggregate;
        if (Number_of_Backlogs) studentFields.Number_of_Backlogs = Number_of_Backlogs;
        if (Sem_1_SGPA) studentFields.Sem_1_SGPA = Sem_1_SGPA;
        if (Sem_2_SGPA) studentFields.Sem_2_SGPA = Sem_2_SGPA;
        if (Sem_3_SGPA) studentFields.Sem_3_SGPA = Sem_3_SGPA;
        if (Sem_4_SGPA) studentFields.Sem_4_SGPA = Sem_4_SGPA;
        if (Sem_5_SGPA) studentFields.Sem_5_SGPA = Sem_5_SGPA;
        if (isPlaced) studentFields.isPlaced = isPlaced;
        if (placedIn) studentFields.placedIn = placedIn.split(',').map(placed => placed.trim());
        try {
            let student = await Student.findOneAndUpdate(
                { _id: req.params.id },
                { $set: studentFields },
                { new: true }
            )
            res.json(student)
        } catch (error) {
            console.log(error.message);
            if (error.kind == "ObjectId") {
                res.status(401).send("Student not found")
            }
            res.status(500).send("Server Error")
        }
    })
module.exports = router;