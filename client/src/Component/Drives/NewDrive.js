import React, { useState, useEffect } from 'react'
import Navbar from '../Layout/Navbar'
import { connect } from 'react-redux'
import { getBranches, getColleges, getDriveFilter } from '../../Redux/actions/filters'
import { createDrive } from '../../Redux/actions/drives'
import { Multiselect } from 'multiselect-react-dropdown'
import Alert from '../Layout/Alert'
import './NewDrive.css'
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
        placedIn: [],
        belowPackage: 0
    })
    const {
        companyName, packages, branch, course, desc, ssc, hsc, graduation,
        diploma, placedIn, belowPackage
    } = formData
    useEffect(() => {
        props.getBranches()
    }, [])
    useEffect(() => {
        props.getColleges()
    }, [])
    useEffect(() => {
        props.getDriveFilter()
    }, [])

    const changeHandler = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const selectBranch = (selectedList, selectedItem) => {
        setFormData({ ...formData, ['branch']: [...branch, selectedItem.label] })
    }
    const selectCollege = (selectedList, selectedItem) => {
        setFormData({ ...formData, ['course']: [...course, selectedItem.label] })
    }
    const selectNotEligible = (selectedList, selectedItem) => {
        setFormData({ ...formData, ['placedIn']: [...placedIn, selectedItem._id] })
    }
    const removeBranch = (selectedList, selectedItem) => {
        setFormData({ ...formData, ['branch']: formData.branch.filter(branch => selectedItem.label !== branch) })
    }
    const removeCollege = (selectedList, selectedItem) => {
        setFormData({ ...formData, ['course']: formData.course.filter(course => selectedItem.label !== course) })
    }
    const removeNotEligible = (selectedList, selectedItem) => {
        setFormData({ ...formData, ['placedIn']: formData.placedIn.filter(notE => selectedItem._id !== notE) })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        props.createDrive(formData);
        setFormData({
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
            placedIn: [],
            belowPackage: 0
        })
    }
    return (
        <div>
            <Navbar />
            <Alert />
            <div className="MainBody">
                <h2>Create a new drive</h2>
                <br />
                <form className="form" onSubmit={e => submitHandler(e)}>
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
                            <Multiselect
                                style={{
                                    searchBox: {
                                        fontSize: 'smaller', width: '12rem', height: '3rem',
                                        overflowY: 'scroll', borderRadius: '25px', overflowX: 'hidden'
                                    }
                                }} options={props.branch}
                                displayValue="label"
                                loading={!props.branch}
                                placeholder="Branch"
                                name='branch'
                                showArrow
                                onSelect={(selectedList, selectedItem) => selectBranch(selectedList, selectedItem)}
                                onRemove={(selectedList, selectedItem) => removeBranch(selectedList, selectedItem)}
                            />
                            <br />
                            <Multiselect style={{
                                searchBox: {
                                    fontSize: 'smaller', width: '12rem', height: '3rem',
                                    overflowY: 'scroll', borderRadius: '25px', overflowX: 'hidden'
                                }
                            }} options={props.college}
                                displayValue="label"
                                placeholder="College"
                                showArrow
                                onSelect={(selectedList, selectedItem) => selectCollege(selectedList, selectedItem)}
                                onRemove={(selectedList, selectedItem) => removeCollege(selectedList, selectedItem)}
                            />
                            <div className="Flex Flex-column DriveForm-column-compact">
                                <label>Description</label>
                                <textarea style={{ resize: 'none' }} value={desc}
                                    onChange={e => changeHandler(e)} name="desc" rows="3"></textarea>
                            </div>
                        </div>
                        <div className="DriveForm-column DriveForm-column-border">
                            <h4>Eligibility:</h4>
                            <input name="ssc" placeholder="10th %" value={ssc} onChange={(e) => changeHandler(e)} />
                            <input name="hsc" placeholder="12th %" value={hsc} onChange={(e) => changeHandler(e)} />
                            <input name="diploma" placeholder="Diploma %" value={diploma} onChange={(e) => changeHandler(e)} />
                            <input name="graduation" placeholder="Graduation CGPA" value={graduation} onChange={(e) => changeHandler(e)} />
                        </div>
                        <div className="DriveForm-column DriveForm-column-border">
                            <h4>Not Eligible: </h4>
                            <Multiselect style={{
                                searchBox: {
                                    fontSize: 'smaller', width: '12rem', height: '3rem',
                                    overflowY: 'scroll', borderRadius: '25px', overflowX: 'hidden'
                                }
                            }} options={props.drives}
                                displayValue="label"
                                showArrow
                                hidePlaceHolder
                                placeholder="Already place In"
                                onSelect={(selectedList, selectedItem) => selectNotEligible(selectedList, selectedItem)}
                                onRemove={(selectedList, selectedItem) => removeNotEligible(selectedList, selectedItem)}
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
        </div >
    )
}
const mapStateToProps = state => ({
    branch: state.filters.branch,
    college: state.filters.college,
    drives: state.filters.drives
})
export default connect(mapStateToProps, { getBranches, getColleges, getDriveFilter, createDrive })(NewDrive)
