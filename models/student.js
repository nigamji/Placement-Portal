const mongoose = require('mongoose');
var student = new mongoose.Schema(
    {
Email_Address:
    {
        type:String,
        required: true
    },
Student_Name:{
    type:String,
    required:true
            },

Enrollment_No:{
    type:String,
    required:true
},
College:{
    type:String,
    required:true
},
Branch:{
    type:String,
    required:true
},

Gender:{
    type:String,
    required:true
},

DOB:{
    type:Date,
    required:true
},

Contact_Number:{
    type:Number,
    min:10,
    max:10,
    required: true
},

Father_Name:
{
    type:String,
    required:true
},
Mother_Name:
{
    type:String,
    required:true
},
Present_Address
:
{
    type:String,
    required:true
},
Permanent_Address
:
{
    type:String,
    required:true
},
Class_10th_per:{
    type:String,
    required:true
},
Year_of_Passing_10th:{
    type:String,
    required:true
},
_10th_Board:{
    type:String,
    required:true
},

Class_12th_per:{
    type:String,
    required:true
},
Year_of_Passing_12th:
{
    type:Number,
    required:true
},
_12th_Board:{
    type:String,
    required:true
},
Study_Gap:{
    type:Number,
    required:true
},
Current_CGPA_aggregate:{
    type:String,
    required:true
},
Number_of_Backlogs:{
    type:Number,
    required:true
},
Sem_1_SGPA
:
{
    type:Number,
    required:true,
    min:0,
    max:10
},
Sem_2_SGPA
:
{
    type:Number,
    required:true,
    min:0,
    max:10
},

Sem_3_SGPA:{
    type:Number,
    required:true,
    min:0,
    max:10
},
Sem_4_SGPA:{
    type:Number,
    required:true,
    min:0,
    max:10
},
Sem_5_SGPA:{
    type:Number,
    required:true,
    min:0,
    max:10
},

isPlaced:{
    type: Boolean,
    required: true
},
placedIn:{
    companies:[{}]
}


    });
module.exports = mongoose.model('student', student); 

