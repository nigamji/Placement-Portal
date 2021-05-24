import React, { useEffect } from 'react'
import NavBar from '../Layout/Navbar'
import { getRecord } from '../../Redux/actions/records'
import { connect } from 'react-redux'
import Loader from '../Layout/Loader'
import { Fragment } from 'react'
import Moment from 'react-moment'
const StudentDetail = (props) => {
    useEffect(() => {
        props.getRecord(props.match.params.id)
    }, [props.match.params.id])
    return (
        <body>
            <NavBar />
            {props.record === null ?
                <Fragment>
                    <br />
                    <Loader />
                </Fragment> : (
                    <Fragment>
                        <a onClick={() => props.history.goBack()} style={{ position: 'relative' }} className="back a1">&laquo; Back </a>
                        <div className="details2" style={{ alignSelf: 'center' }}>
                            <h1 className="heading2" >Student Details</h1>
                            <table className="detailsTable2">
                                <tr>
                                    <td className="fvalue2">Name</td>
                                    <td>:</td>
                                    <td id="Name" className="value2">{props.record.Student_Name ? props.record.Student_Name : null}</td>
                                </tr>
                                <tr>
                                    <td className="fvalue2">Enrollment No</td>
                                    <td>:</td>
                                    <td id="Enrollment" className="value2">{props.record.Enrollment_No}</td>
                                </tr>
                                <tr>
                                    <td className="fvalue2">Email Id</td>
                                    <td>:</td>
                                    <td id="Email Id" className="value2">{props.record.Email_Address}</td>
                                </tr>
                                <tr>
                                    <td className="fvalue2">Branch</td>
                                    <td>:</td>
                                    <td id="Branch" className="value2">{props.record.Branch}</td>
                                </tr>
                                <tr>
                                    <td className="fvalue2">Gender</td>
                                    <td>:</td>
                                    <td id="Gender" className="value2">{props.record.Gender}</td>
                                </tr>
                                <tr>
                                    <td className="fvalue2">Date Of Birth</td>
                                    <td>:</td>
                                    <td id="DOB" className="value2"><Moment format="YYYY/MM/DD">
                                        {props.record.DOB}</Moment></td>
                                </tr>
                                <tr>
                                    <td className="fvalue2">Contact Number</td>
                                    <td>:</td>
                                    <td id="Contact_Number" className="value2">{props.record.Contact_Number}</td>
                                </tr>
                                <tr>
                                    <td className="fvalue2">Father Name</td>
                                    <td>:</td>
                                    <td id="Father_Name" className="value2">{props.record.Father_Name}</td>
                                </tr>
                                <tr>
                                    <td className="fvalue2">Mother Name</td>
                                    <td>:</td>
                                    <td id="Mother_Name" className="value2">{props.record.Mother_Name}</td>
                                </tr>
                                <tr>
                                    <td className="fvalue2">Present Address</td>
                                    <td>:</td>
                                    <td id="Present_Address" style={{ width: '34rem', textAlign: 'left' }} className="value2">{props.record.Present_Address}</td>
                                </tr>
                                <tr>
                                    <td className="fvalue2">Permanent Address</td>
                                    <td>:</td>
                                    <td id="Permanent_Address" style={{ width: '34rem', textAlign: 'left' }} className="value2">{props.record.Permanent_Address}</td>
                                </tr>
                                <tr>
                                    <td className="fvalue2">10th Percentage</td>
                                    <td>:</td>
                                    <td id="Class_10th_per" className="value2">{props.record.Class_10th_per}</td>
                                </tr>
                                <tr>
                                    <td className="fvalue2">Year Of Passing 10th</td>
                                    <td>:</td>
                                    <td id="YearOfPassing_10th" className="value2"><Moment format="YYYY">{props.record.Year_of_Passing_10th}</Moment></td>
                                </tr>
                                <tr>
                                    <td className="fvalue2">10th Board</td>
                                    <td>:</td>
                                    <td id="10tt_Board" className="value2">{props.record._10th_Board}</td>
                                </tr>
                                <tr>
                                    <td className="fvalue2">Class 12th Percentage</td>
                                    <td>:</td>
                                    <td id="Class_12th_per" className="value2">{props.record.Class_12th_per}</td>
                                </tr>
                                <tr>
                                    <td className="fvalue2">Year Of Passing 12th</td>
                                    <td>:</td>
                                    <td id="YearOfPassing_12th" className="value2"><Moment format="YYYY">{props.record.Year_of_Passing_10th}</Moment></td>
                                </tr>
                                <tr>
                                    <td className="fvalue2">12th Board</td>
                                    <td>:</td>
                                    <td id="12th_Board" className="value2">{props.record._12th_Board}</td>
                                </tr>
                                <tr>
                                    <td className="fvalue2">Study Gap</td>
                                    <td>:</td>
                                    <td id="Study_Gap" className="value2">{props.record.Study_Gap}</td>
                                </tr>
                                <tr>
                                    <td className="fvalue2">Current CGPA</td>
                                    <td>:</td>
                                    <td id="Current_CGPA" className="value2">{props.record.Current_CGPA_aggregate}</td>
                                </tr>
                                <tr>
                                    <td className="fvalue2">Backlogs</td>
                                    <td>:</td>
                                    <td id="Backlogs" className="value2">{props.record.Number_of_Backlogs}</td>
                                </tr>
                                <tr>
                                    <td className="fvalue2">SGPA 1</td>
                                    <td>:</td>
                                    <td id="Sem1_SGPA" className="value2">{props.record.Sem_1_SGPA}</td>
                                </tr>
                                <tr>
                                    <td className="fvalue2">SGPA 2</td>
                                    <td>:</td>
                                    <td id="Sem2_SGPA" className="value2">{props.record.Sem_2_SGPA}</td>
                                </tr>
                                <tr>
                                    <td className="fvalue2">SGPA 3</td>
                                    <td>:</td>
                                    <td id="Sem3_SGPA" className="value2">{props.record.Sem_3_SGPA}</td>
                                </tr>
                                <tr>
                                    <td className="fvalue2">SGPA 4</td>
                                    <td>:</td>
                                    <td id="Sem1_SGPA" className="value2">{props.record.Sem_4_SGPA}</td>
                                </tr>
                                <tr>
                                    <td className="fvalue2">SGPA 5</td>
                                    <td>:</td>
                                    <td id="Sem1_SGPA" className="value2">{props.record.Sem_5_SGPA}</td>
                                </tr>
                                <tr>
                                    <td className="fvalue2">Placed</td>
                                    <td>:</td>
                                    <td id="isPlaced" className="value2">{props.record.isPlaced ? 'Yes' : 'No'}</td>
                                </tr>
                                <tr>
                                    <td className="fvalue2">Placed In</td>
                                    <td>:</td>
                                    <td id="placedIn" className="value2">{props.record.placedIn ?
                                        props.record.placedIn.map(placed => placed) : '-'
                                    }</td>
                                </tr>
                            </table>

                        </div>
                    </Fragment>
                )}

            <br />
            <br />
        </body >)
}
const mapStateToProps = state => ({
    record: state.records.record,
    loading: state.records.loading
})
export default connect(mapStateToProps, { getRecord })(StudentDetail)
