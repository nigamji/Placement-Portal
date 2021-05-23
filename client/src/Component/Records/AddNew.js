import React, { useState } from 'react'
import './AddNew.css'
import { connect } from 'react-redux'
import Alert from '../Layout/Alert'
import { addRecord } from '../../Redux/actions/records'
const AddNew = (props) => {
    const [formData, setFormData] = useState({
        Email_Address: '',
        Student_Name: '',
        Enrollment_No: null,
        College: 'OIST',
        Branch: 'CSE',
        Gender: 'M',
        DOB: '',
        Contact_Number: null,
        Father_Name: '',
        Mother_Name: '',
        Present_Address: '',
        Permanent_Address: '',
        Class_10th_per: null,
        Year_of_Passing_10th: '',
        _10th_Board: '',
        Class_12th_per: null,
        Year_of_Passing_12th: '',
        _12th_Board: '',
        Study_Gap: 0,
        Current_CGPA_aggregate: null,
        Number_of_Backlogs: 0,
        Sem_1_SGPA: null,
        Sem_2_SGPA: null,
        Sem_3_SGPA: null,
        Sem_4_SGPA: null,
        Sem_5_SGPA: null
    })
    const { Email_Address, Student_Name, Enrollment_No, College, Branch, Gender, DOB,
        Contact_Number, Father_Name, Mother_Name, Present_Address, Permanent_Address, Class_10th_per, Year_of_Passing_10th, Class_12th_per, Year_of_Passing_12th,
        _10th_Board, _12th_Board, Study_Gap, Current_CGPA_aggregate, Number_of_Backlogs, Sem_1_SGPA, Sem_2_SGPA, Sem_3_SGPA, Sem_4_SGPA, Sem_5_SGPA
    } = formData;
    const changeHandler = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const submitHandler = e => {
        e.preventDefault();
        props.addRecord(formData);
        setFormData({
            Email_Address: '',
            Student_Name: '',
            Enrollment_No: '',
            College: 'OIST',
            Branch: 'CSE',
            Gender: 'M',
            DOB: '',
            Contact_Number: null,
            Father_Name: '',
            Mother_Name: '',
            Present_Address: '',
            Permanent_Address: '',
            Class_10th_per: null,
            Year_of_Passing_10th: '',
            _10th_Board: '',
            Class_12th_per: null,
            Year_of_Passing_12th: '',
            _12th_Board: '',
            Study_Gap: 0,
            Current_CGPA_aggregate: null,
            Number_of_Backlogs: 0,
            Sem_1_SGPA: null,
            Sem_2_SGPA: null,
            Sem_3_SGPA: null,
            Sem_4_SGPA: null,
            Sem_5_SGPA: null
        });
    }

    return (
        <body className="body1">
            <a onClick={() => props.history.goBack()} className="back a1">&laquo; Back </a>
            <div className="container">
                <div className="title">New Record</div>
                <hr />
                <Alert />
                <div className="content">
                    <form onSubmit={e => submitHandler(e)}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Full Name</span>
                                <input type="text" onChange={e => changeHandler(e)} placeholder="Enter your name"
                                    name="Student_Name" value={Student_Name} required />
                            </div>
                            <div className="input-box">
                                <span className="details">Email Id</span>
                                <input type="email"
                                    name="Email_Address" value={Email_Address}
                                    onChange={e => changeHandler(e)} placeholder="Enter your mail id" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Enrollment No</span>
                                <input type="text"
                                    name="Enrollment_No" value={Enrollment_No} onChange={e => changeHandler(e)} placeholder="Enter your enroll no" required />
                            </div>
                            <div className="input-box">
                                <span className="details">College</span>
                                <select name="College" value={College} onChange={e => changeHandler(e)}>
                                    <option name="OIST" value="OIST">OIST</option>
                                    <option name="OCT" value="OCT">OCT</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <span className="details">Branch</span>
                                <select name="Branch" value={Branch} onChange={e => changeHandler(e)}>
                                    <option value="CSE">CSE</option>
                                    <option value="IT">IT</option>
                                    <option value="EC">EC</option>
                                    <option value="ME">ME</option>
                                    <option value="AU">AU</option>
                                    <option value="EX">EX</option>
                                    <option value="CE">CE</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <span className="details">Gender</span>
                                <select name="Gender" value={Gender} onChange={e => changeHandler(e)}>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <span className="details">Date Of Birth</span>
                                <input type="date"
                                    name="DOB" value={DOB} onChange={e => changeHandler(e)} placeholder="Enter your dob" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Contact Number</span>
                                <input type="text"
                                    name="Contact_Number" value={Contact_Number} onChange={e => changeHandler(e)} placeholder="Enter your phone no" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Father's Name</span>
                                <input type="text"
                                    name="Father_Name" value={Father_Name} onChange={e => changeHandler(e)} placeholder="Enter your father's name " required />
                            </div>
                            <div className="input-box">
                                <span className="details">Mother's Name</span>
                                <input type="text"
                                    name="Mother_Name" value={Mother_Name} onChange={e => changeHandler(e)} placeholder="Enter your mother's name " required />
                            </div>
                            <div className="input-box">
                                <span className="details">Present Address</span>
                                <input type="text"
                                    name="Present_Address" value={Present_Address} onChange={e => changeHandler(e)} placeholder="Enter your present address" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Permanent Address</span>
                                <input type="text"
                                    name="Permanent_Address" value={Permanent_Address}
                                    onChange={e => changeHandler(e)} placeholder="Enter your permanent address" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Class X CGPA</span>
                                <input type="text"
                                    name="Class_10th_per" value={Class_10th_per}
                                    onChange={e => changeHandler(e)} placeholder="Enter your 10th Cgpa" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Class X YOP</span>
                                <input type="text"
                                    name="Year_of_Passing_10th" value={Year_of_Passing_10th}
                                    onChange={e => changeHandler(e)} placeholder="Enter your 10th yop" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Class X Board Name</span>
                                <input type="text"
                                    value={_10th_Board} name="_10th_Board"
                                    onChange={e => changeHandler(e)} placeholder="Enter your 10th board" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Class XII Percentage</span>
                                <input type="text"
                                    name="Class_12th_per" value={Class_12th_per}
                                    onChange={e => changeHandler(e)} placeholder="Enter your 12th percentage" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Class XII YOP </span>
                                <input type="text"
                                    value={Year_of_Passing_12th} name="Year_of_Passing_12th"
                                    onChange={e => changeHandler(e)} placeholder="Enter your 12th yop" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Class XII Board Name</span>
                                <input type="text" onChange={e => changeHandler(e)} placeholder="Enter your 12th board"
                                    value={_12th_Board} name="_12th_Board"
                                    required />
                            </div>
                            <div className="input-box">
                                <span className="details">Study Gap</span>
                                <input type="text"
                                    name="Study_Gap" value={Study_Gap}
                                    onChange={e => changeHandler(e)} placeholder="Enter your study gap" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Current Aggregate CGPA</span>
                                <input type="text" name="Current_CGPA_aggregate" value={Current_CGPA_aggregate} onChange={e => changeHandler(e)} placeholder="Enter your avg cgpa" required />
                            </div>
                            <div className="input-box">
                                <span className="details">No of Backlogs</span>
                                <input type="text"
                                    value={Number_of_Backlogs} name="Number_of_Backlogs"
                                    onChange={e => changeHandler(e)} placeholder="Enter your backlog" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Sem I SGPA</span>
                                <input type="text"
                                    value={Sem_1_SGPA} name="Sem_1_SGPA"
                                    onChange={e => changeHandler(e)} placeholder="Enter your 1st sem sgpa" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Sem II SGPA</span>
                                <input type="text" value={Sem_2_SGPA} name="Sem_2_SGPA" onChange={e => changeHandler(e)} placeholder="Enter your 2nd sem sgpa" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Sem III SGPA</span>
                                <input type="text" value={Sem_3_SGPA} name="Sem_3_SGPA" onChange={e => changeHandler(e)} placeholder="Enter your 3rd sem sgpa" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Sem IV SGPA </span>
                                <input type="text" value={Sem_4_SGPA} name="Sem_4_SGPA" onChange={e => changeHandler(e)} placeholder="Enter your 4th sem sgpa" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Sem V SGPA </span>
                                <input type="text" value={Sem_5_SGPA} name="Sem_5_SGPA" onChange={e => changeHandler(e)} placeholder="Enter your 5th sem sgpa" required />
                            </div>
                        </div>
                        <div>
                            <input type="submit" value="SUBMIT" className="apply1" />
                        </div>
                    </form>
                </div>

            </div>
        </body>
    )
}
export default connect(null, { addRecord })(AddNew)
