import React, { useState, useEffect } from 'react'
import Navbar from '../Layout/Navbar'
import Select from 'react-select'
import { connect } from 'react-redux'
import { getBranches, getColleges, getDriveFilter } from '../../Redux/actions/filters'
const NewDrive = (props) => {
    const [formData, setFormData] = useState({
        companyName: '',
        packages: 0,
        branch: [],
        course: [],
        desc: '',
        dateOfDrive: null,
        ssc: null,
        hsc: null,
        graduation: null,
        diploma: null,
        notEligible: [],
        belowPackage: 0
    })
    const {
        companyName, packages, branch, course, desc, dateOfDrive, ssc, hsc, graduation,
        diploma, notEligible, belowPackage
    } = formData
    const [selectedBranch, setSelectedBranch] = useState([]);
    const [selectedCollege, setSelectedCollege] = useState([]);
    const [selectedDrive, setSelectedDrive] = useState([]);
    useEffect(() => {
        props.getBranches()
    }, [])
    useEffect(() => {
        props.getColleges()
    }, [])
    useEffect(() => {
        props.getDriveFilter()
    }, [])
    const branchHandler = e => {
        // console.log(e);
        setFormData({ branch: e })
        // setFormData({ branch: selectedBranch.value })
    }
    const collegeHandler = e => {
        setSelectedCollege([e.target.name] = e.target.value)
    }
    const driveHandler = e => {
        setSelectedDrive([e.target.name] = e.target.value)
    }
    const changeHandler = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    console.log(formData)
    return (
        <div>
            <Navbar />
            <div className="MainBody">
                <h2>Create a new drive</h2>
                <br />
                <form className="form">
                    <div className="DriveForm">
                        <div className="DriveForm-column">
                            <div className="Flex Flex-column DriveForm-column-compact">
                                <label>Company: </label>
                                <input type="text" name="companyName" value={companyName}
                                    onChange={e => changeHandler(e)} />
                            </div>
                            <div className="Flex Flex-column DriveForm-column-compact">
                                <label>Package: </label>
                                <input type="number" name="packages" value={packages}
                                    onChange={e => changeHandler(e)} />
                            </div>
                            <Select name="branch"
                                placeholder="Branch"
                                // value={selectedBranch}
                                options={props.branch}
                                onChange={e => branchHandler(e)}
                                isMulti
                            />
                            <Select name="college"
                                placeholder="College"
                                options={props.college}
                                // value={selectedCollege}
                                onChange={e => collegeHandler(e)}
                                isMulti />
                            <div className="Flex Flex-column DriveForm-column-compact">
                                <label>Description</label>
                                <textarea style={{ resize: 'none' }} value={desc}
                                    onChange={e => changeHandler(e)} name="description" rows="3"></textarea>
                            </div>
                        </div>
                        <div className="DriveForm-column DriveForm-column-border">
                            <h4>Eligibility:</h4>
                            <input name="ssc" placeholder="10th %" value={ssc} onChnage={(e) => changeHandler(e)} />
                            <input name="hsc" placeholder="12th %" value={hsc} onChnage={(e) => changeHandler(e)} />
                            <input name="diploma" placeholder="Diploma %" value={diploma} onChnage={(e) => changeHandler(e)} />
                            <input name="graduation" placeholder="Graduation CGPA" value={graduation} onChnage={(e) => changeHandler(e)} />
                        </div>
                        <div className="DriveForm-column DriveForm-column-border">
                            <h4>Not Eligible: </h4>
                            <Select
                                name="placedIn"
                                options={props.drives}
                                placeholder="Placed In"
                                isMulti
                                // value={selectedDrive}
                                onChange={e => driveHandler(e)}
                            />
                            <input type="text" name="belowPackage" placeholder="package"
                                vaue={belowPackage} onChange={e => changeHandler(e)} />
                        </div>
                        <div>
                        </div>

                    </div>
                    <div className="send-button">
                        <button className="Btn Btn-send">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    branch: state.filters.branch,
    college: state.filters.college,
    drives: state.filters.drives
})
export default connect(mapStateToProps, { getBranches, getColleges, getDriveFilter })(NewDrive)
